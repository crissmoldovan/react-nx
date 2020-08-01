import { createElement as RCE } from 'react'

export const createElement = (type, props?, children?) => (children ? RCE(type, props, children) : RCE(type, props))

export const cloneElement = function(element, props?, children?) {
  // need to cover the case when no new props are added, just new children
  let _children = undefined

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  const childrenLength = arguments.length - 2
  if (childrenLength === 1) {
    _children = children
  } else if (childrenLength > 1) {
    const childArray = Array(childrenLength)
    for (let i = 0; i < childrenLength; i++) {
      const child = arguments[i + 2]
      childArray[i] = child
    }
    _children = childArray
  }

  const _props = {
    key: element.key === 'null' || element.key === null ? undefined : element.key,
    ref: element.ref,
    ...element.props,
    ...props,
    ...(_children !== undefined ? { children: _children } : {})
  }

  const type = element.type

  return createElement(type, _props)
}

export default createElement
