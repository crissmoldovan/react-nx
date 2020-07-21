import _ from 'lodash'

export const append = (target, path, value) => {
  const existing = _.get(target, path)

  _.set(target, path, existing && Array.isArray(existing) ? [...existing, value] : [value])

  return target
}

export default append
