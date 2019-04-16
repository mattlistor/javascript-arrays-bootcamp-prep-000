var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, newItem){
  return [newItem, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, newItem){
  chocolateBars.unshift(newItem)
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, newItem){
  return [...chocolateBars, newItem]
}

function destructivelyAddElementToEndOfArray(chocolateBars, newItem){
  chocolateBars.push(newItem)
  return chocolateBars
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars, newItem)