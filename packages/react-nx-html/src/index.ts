import tags from './tags'
import wrap from './wrap'

export { default as nx } from './nx'
export { styleMapping, propsMapping, mappings } from './mappings'
export const elements = {}

tags.map(type => {
  module.exports[type] = elements[type] = props => wrap(type, props)
})

export default elements
