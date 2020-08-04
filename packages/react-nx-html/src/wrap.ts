import element from './element'
import { wrap as wrapNode } from 'react-nx'
import mappings from './mappings'

export function wrap(type: string, props: any) {
  return wrapNode(element(type, props), mappings)
}

export default wrap
