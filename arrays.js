var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(choloateBars, newItem){
  return [newItem, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(choloateBars, newItem){
  chocolateBars.unshift(newItem);
  return chocolateBars;
}

function addElementToEndOfArray(choloateBars, newItem){
  a.push(b)
  return a
}

function destructivelyAddElementToEndOfArray(choloateBars, newItem){
  myArray.push(b)
}