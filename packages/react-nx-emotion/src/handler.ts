import mappings from './mappings'
import { cloneElement } from './element'
import { ops as operations } from 'react-nx'
import wrap from './wrap'

export const handler = {
  get: function (target, prop) {
    if (prop in mappings) {
      const map = mappings[prop]

      if (typeof map === 'string') {
        return value =>
          wrap(cloneElement(target, operations.apply({ ...(target.props || {}) }, map.replace('props.', ''), value)))
      }

      if (typeof map === 'object') {
        const op = operations[map.operation]
        if (!op || typeof op !== 'function')
          throw new Error(`Invaid handler mapping operation: ${map.operation} for prop: ${prop}`)

        return value =>
          wrap(cloneElement(target, op({ ...(target.props || {}) }, map.attr.replace('props.', ''), value)))
      }

      throw new Error(`Invalid map type for prop ${prop} - ${typeof map}`)
    }
    // @ts-ignore
    return Reflect.get(...arguments)
  }
}

export default handler

// export const handler = () => ({
//   get: function(target, prop) {
//     if (prop in styleMappings) {
//       const attr = styleMappings[prop]
//       return value => wrap(cloneElement(target, applyStyle(target.props, attr, value)))
//     }

//     if (prop in fnMappings) {
//       const attr = fnMappings[prop]
//       return value => wrap(cloneElement(target, applyProp(target.props, attr, value)))
//     }

//     if (prop === 'children') {
//       return children => wrap(cloneElement(target, target.props, children))
//     }

//     // @ts-ignore
//     return Reflect.get(...arguments)
//   }
// })

// export default hanlder
