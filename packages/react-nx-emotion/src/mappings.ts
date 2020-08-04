import { styleMapping as htmlStyleMapping, propsMapping as htmlPropsMapping } from '@react-nx/html'

export const styleMapping = Object.keys(htmlStyleMapping).reduce((acc, key) => {
  acc[key] = htmlStyleMapping[key].replace('props.style.', 'props.css.')
  return acc
}, {})

export const propsMapping = {
  ...htmlPropsMapping,
  css: 'css',
  addCss: {
    attr: 'css',
    operation: 'appendObject'
  },
  appendCss: {
    attr: 'css',
    operation: 'appendObject'
  }
}

export const mappings = {
  ...styleMapping,
  ...propsMapping
}

export default mappings
