var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({ obj, key, value })
}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(object, key) {
  delete recipes[key];
  return recipes;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete.key
  return recipes
}
