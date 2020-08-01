import getHandler from './handler'

export const wrap = (node, mappings) => new Proxy(node, getHandler(mappings))

export default wrap
