import styled from '@emotion/styled'
import wrap from './wrap'
import element from './element'

export { default as nx } from './nx'

Object.keys(styled).map(type => {
  module.exports[type] = props => wrap(element(type, props))
})
