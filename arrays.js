var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(choloateBars, newItem){
  return [newItem, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(choloateBars, newItem){
  chocolateBars.unshift(newItem);
  return chocolateBars;
}

function addElementToEndOfArray(a, b){
  a.push(b)
  return a
}

function destructivelyAddElementToEndOfArray(a, b){
  myArray.push(b)
}