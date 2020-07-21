import apply from './ops/apply'
import wrap from './wrap'
import append from './ops/append'
import nx from './nx'

export const getHandler = mappings => ({
  get: function(target, prop) {
    if (prop in mappings) {
      const attr = mappings[prop]
      if (typeof attr === 'string') {
        return value => {
          target.__nx.props = apply(target.__nx.props, attr, value)
          return wrap(target, mappings)
        }
      }
    }

    if (prop === 'children') {
      return value => {
        if (value) {
          let processedChildren = []

          let children = !Array.isArray(value) ? [value] : value
          processedChildren = children.map(child => {
            if (typeof child === 'object') {
              // handle classic react elememnt
              if (child.$$typeof) return child

              // handle react-nx elememnt
              if (child.__nx) return nx(child)

              console.log('no nx ch', child)
              // throw new Error('Child is obj without NX data')
            }

            return child
          })
          target.__nx.props = apply(target.__nx.props, 'children', processedChildren)
        }

        return wrap(target, mappings)
      }
    }

    if (prop === 'add' || prop === 'append' || prop === 'appendChildren') {
      return value => {
        target.__nx.props = append(target.__nx.props, 'children', value)
        return wrap(target, mappings)
      }
    }
    // @ts-ignore
    return Reflect.get(...arguments)
  }
})

export default getHandler
