import wrap from './wrap'
import element from './element'

export const nx = node => (props?) => wrap(element(node, props))

export default nx
