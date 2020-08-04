import handler from './handler'

export const wrap = node => new Proxy(node, handler)

export default wrap
