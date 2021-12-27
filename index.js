// Code your solution here
function findMatching(drivers, string) {
  return drivers.filter((driver) => driver.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => {
    const test = driver.indexOf(string)
    if (test === 0) return true
    return false
  })
}

function matchName (drivers, string) {
  return drivers.filter(driverObj => driverObj.name.toLowerCase() === string.toLowerCase())
}