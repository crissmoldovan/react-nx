import handler from './handler'

export const wrap = (node, mappings) => new Proxy(node, handler(mappings))

export default wrap
