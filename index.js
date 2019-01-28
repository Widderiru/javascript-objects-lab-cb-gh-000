var recipes = {}

function updateObjectWithKeyAndValue(object, key, values) {
  return Object.assign({}, object, {[key] : values})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
