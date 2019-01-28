var recipes = {}

function updateObjectWithKeyAndValue(object, key, values) {
  return Object.assign({},object, [key] : values)
}