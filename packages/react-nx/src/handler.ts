import apply from './ops/apply'
import wrap from './wrap'
import append from './ops/append'
import appendObject from './ops/appendObject'

const operations = { apply, append, appendObject }

export const handler = mappings => ({
  get: function (target, prop) {
    if (prop in mappings) {
      const map = mappings[prop]

      if (typeof map === 'string') {
        return value => wrap(apply(target, map, value), mappings)
      }

      if (typeof map === 'object') {
        const op = operations[map.operation]
        if (!op || typeof op !== 'function')
          throw new Error(`Invaid handler mapping operation: ${map.operation} for prop: ${prop}`)

        return value => wrap(op(target, map.attr, value), mappings)
      }

      throw new Error(`Invalid map type for prop ${prop} - ${typeof map}`)
    }
    // @ts-ignore
    return Reflect.get(...arguments)
  }
})

export default handler
