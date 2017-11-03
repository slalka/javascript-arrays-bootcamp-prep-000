var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(a,b){
  return [b,...a];
}


function destructivelyAddElementToBeginningOfArray(a,b){
  a = [b,...a]
  return a
}
