var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(choloateBars, newItem){
  return [newItem, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(a, b){
  myArray.unshift(b)
}

function addElementToEndOfArray(a, b){
  a.push(b)
  return a
}

function destructivelyAddElementToEndOfArray(a, b){
  myArray.push(b)
}