import { wrapNode } from '../'

export const nx = node => {
  if (node.__nx) return node.__nx.jsx(node.__nx.type, node.__nx.props)

  console.log('node', node)
  if (typeof node === 'function') {
    return (props?) => wrapNode(node, props)
  }
  return null
}

export default nx
