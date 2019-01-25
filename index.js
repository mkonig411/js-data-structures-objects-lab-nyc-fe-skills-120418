// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const driverCopy = {…driver}
  driverCopy[key] = value
  return driverCopy
}