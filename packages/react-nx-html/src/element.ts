/**
 * constructs a react compatible html element, similar to that React.createElement does
 * @param type - the type of the element; string or function
 * @param props - object containing props to be applied to the element
 */
export const element = function (type: string, props = { ref: null, key: null }): object {
  return {
    props,
    type,
    $$typeof: Symbol.for('react.element'),
    ref: props.ref || null,
    key: props.key || null
  }
}

export default element
