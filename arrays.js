var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var myArray = new Array()

function addElementToBeginningOfArray(a, b){
  a.unshift(b)
  return a
}

function destructivelyAddElementToBeginningOfArray(a, b){
  myArray.unshift(b)
}