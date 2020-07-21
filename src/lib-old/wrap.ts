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

    if (prop === 'add' || prop === 'append' || prop === 'appendChildren') {
      return childrenToAdd => {
        let newChildren = childrenToAdd
        let existingChildren = target.props && target.props.children
        if (existingChildren) {
          if (!Array.isArray(existingChildren)) {
            existingChildren = [existingChildren]
          }

          if (Array.isArray(childrenToAdd)) {
            newChildren = [...existingChildren, ...childrenToAdd]
          } else {
            newChildren = [...existingChildren, childrenToAdd]
          }
        }
        return wrap(cloneElement(target, target.props, newChildren))
      }
    }

    if (prop === 'className') {
      return value => wrap(cloneElement(target, applyProp(target.props, 'className', value)))
    }

    if (prop === 'css' || prop === 'style' || prop === 'styles') {
      return (value, override?) =>
        wrap(
          cloneElement(
            target,
            applyProp(
              target.props,
              'css',
              override ? value : { ...(target.props && target.props.css ? target.props.css : {}), ...value }
            )
          )
        )
    }

    // @ts-ignore
    return Reflect.get(...arguments)
  }
}

export const wrap = node => new Proxy(node, handler)

export default wrap
