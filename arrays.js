var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var myArray = new Array()

function addElementToBeginningOfArray(a, b){
  return [candyString, ...chocolateBars];
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