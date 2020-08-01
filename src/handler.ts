import apply from './ops/apply'
import wrap from './wrap'
import append from './ops/append'
import appendObject from './ops/appendObject'

export const getHandler = mappings => ({
  get: function(target, prop) {
    if (prop === 'style') {
      return value => wrap(apply(target, `props.style`, value), mappings)
    }

    if (prop === 'addStyle' || prop === 'appendStyle') {
      return value => wrap(appendObject(target, `props.style`, value), mappings)
    }

    if (prop in mappings) {
      const attr = mappings[prop]
      if (typeof attr === 'string') {
        return value => wrap(apply(target, `props.${attr}`, value), mappings)
      }
    }

    if (prop === 'add' || prop === 'append' || prop === 'appendChildren') {
      return value => wrap(append(target, 'props.children', value), mappings)
    }
    // @ts-ignore
    return Reflect.get(...arguments)
  }
})

export default getHandler
