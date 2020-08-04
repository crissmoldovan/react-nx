import handler from './handler'
import wrap from './wrap'
import apply from './ops/apply'
import append from './ops/append'
import appendObject from './ops/appendObject'

export { default as handler } from './handler'
export { default as wrap } from './wrap'
export { default as apply } from './ops/apply'
export { default as append } from './ops/append'
export { default as appendObject } from './ops/appendObject'

export const ops = {
  apply,
  append,
  appendObject
}

export default { handler, wrap, ops }
