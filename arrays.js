var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(choloateBars, newItem){
  return [newItem, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(choloateBars, newItem){
  chocolateBars.unshift(newItem);
  return chocolateBars;
}

function addElementToEndOfArray(choloateBars, newItem){
  return [...chocolateBars, newItem];
}

function destructivelyAddElementToEndOfArray(choloateBars, newItem){
  chocolateBars.push(newItem);
  return chocolateBars;
}