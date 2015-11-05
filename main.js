function isValid(numberString){
  var numberArray = numberString.replace(/ /g, "").split('');

  for(x = 0; x < numberArray.length; x++){
    if(x % 2 === 0)
      numberArray[x] = (Number(numberArray[x]) * 2);
    else
      numberArray[x] = Number(numberArray[x]);
  }

  var answer = numberArray.reduce(function(total, current){
    return total + current;
  });

  if (answer % 10 === 0) {
    return true;
  }

  else{
    return false;
  }
}


console.assert(isValid("4408 0412 3456 7893") === false);
console.assert(isValid("5000 0000 0000 0000") === true);
console.assert(isValid("4408 0412 3456 2193") === true);
