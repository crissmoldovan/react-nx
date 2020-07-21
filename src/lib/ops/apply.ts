import _ from 'lodash'

export const apply = (target, path, value, mergeIfObject?) => {
  if (_.has(target, path) && _.isObject(_.get(target, path) && mergeIfObject)) {
    _.merge(target, _.set({}, path, value))
  } else {
    _.set(target, path, value)
  }

  return target
}

export default apply
