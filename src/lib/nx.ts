import { createElement } from './element'
import wrap from './wrap'

export const nx = element => (props?, children?) => wrap(createElement(element, props, children))

export default nx
