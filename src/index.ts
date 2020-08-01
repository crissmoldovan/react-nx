import tags from './tags'
import { createElement } from 'react'
import { mapping as styleMapping } from './styles'
import { mapping as propsMapping } from './props'

export { default as nx } from './nx'

import wrap from './wrap'

export const element = function(type, props = { ref: null, key: null }) {
  return {
    props: props || {},
    type,
    jsx: createElement,
    $$typeof: Symbol.for('react.element'),
    ref: props.ref || null,
    key: props.key || null
  }
}

export const elements = {}

export const wrapNode = (type, props) => {
  return wrap(element(type, props), {
    ...propsMapping,
    ...styleMapping
  })
}

tags.map(type => {
  module.exports[type] = elements[type] = props => wrapNode(type, props)
})

export default elements
