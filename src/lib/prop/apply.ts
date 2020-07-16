export const applyProp = (props, attr, value) => ({
  ...(props || {}),
  [attr]: value
})

export default applyProp
