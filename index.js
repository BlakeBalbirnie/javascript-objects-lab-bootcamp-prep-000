var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({ obj, key, value })
}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({ obj: { prop: 1 }, key: 'prop2', value: 2 })
}