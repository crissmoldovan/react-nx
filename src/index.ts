import styled from '@emotion/styled'
import element from './lib/element'
import wrap from './lib/wrap'
export { default as nx } from './lib/nx'

Object.keys(styled).map(type => {
  module.exports[type] = props => wrap(element(type, props))
})
