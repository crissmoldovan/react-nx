import { default as styleMapping } from './styles'
import { default as propsMapping } from './props'

export { default as styleMapping } from './styles'
export { default as propsMapping } from './props'

export const mappings = {
  ...propsMapping,
  ...styleMapping
}

export default mappings
