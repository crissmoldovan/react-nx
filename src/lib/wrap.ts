import { cloneElement } from './element'
import { mapping as styleMappings, apply as applyStyle } from './style'
import { apply as applyProp } from './prop'

const fnMappings = {
  onClick: 'onClick'
}

const handler = {
  get: function(target, prop) {
    if (prop in styleMappings) {
      const attr = styleMappings[prop]
      return value => wrap(cloneElement(target, applyStyle(target.props, attr, value)))
    }

    if (prop in fnMappings) {
      const attr = fnMappings[prop]
      return value => wrap(cloneElement(target, applyProp(target.props, attr, value)))
    }

    if (prop === 'children') {
      return children => wrap(cloneElement(target, target.props, children))
    }

    // @ts-ignore
    return Reflect.get(...arguments)
  }
}

export const wrap = node => new Proxy(node, handler)

export default wrap
