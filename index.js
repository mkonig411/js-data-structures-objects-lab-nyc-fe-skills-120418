// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(key, value) {
  const driverCopy = {…driver}
  driverCopy[key] = value
  return driverCopy
}