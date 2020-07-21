import tags from './lib/tags'
import { createElement } from 'react'
import { mapping as styleMapping } from './lib/styles'
import { mapping as propsMapping } from './lib/props'

export { default as nx } from './lib/nx'

import wrap from './lib/wrap'

export const element = (type, props) => ({
  __nx: {
    jsx: createElement,
    type,
    props: props || {}
  }
})

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
