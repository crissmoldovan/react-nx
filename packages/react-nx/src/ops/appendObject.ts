import _ from 'lodash'

export const append = (target, path, value) => {
  const existing = _.get(target, path)
  _.set(target, path, existing && typeof existing === 'object' ? { ...existing, ...value } : { ...value })
  return target
}

export default append
