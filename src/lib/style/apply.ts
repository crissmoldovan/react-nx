import applyProp from '../prop/apply'

export const applyStyle = (props, attr, value) =>
  applyProp(props, 'css', { ...(props && props.css ? props.css : {}), [attr]: value })

export default applyStyle
