//https://app.codesignal.com/arcade/intro/level-3/9DgaPsE2a7M6M2Hu6

function getStartAndEndIndexes(inputString){

  // function #1: define curly bracket's indexes
  // if there are inner brackets their indexes will be found first
  
  let startIndex = null;
  let endIndex = null;
  
  for (i=0;i<inputString.length;i++){
      if(inputString[i]=="("){
        startIndex = i;
      }
      else if(inputString[i]==")") {
        endIndex = i;
        break;
      }
  }
  return [startIndex,endIndex]
}

function reverse(startIndex,endIndex,inputString){

  // function #2: slices part in first or inner parenthesis and reverses what's inside
  // then reterns the whole string with reversed part
  
  let reversePart = inputString.slice(startIndex+1,endIndex);
  let reversedPart = '';
  
  for(i=0;i<reversePart.length;i++){
    reversedPart += (reversePart[reversePart.length-1-i])
  }
  
  return inputString.slice(0,startIndex)+reversedPart+inputString.slice(endIndex+1,inputString.length)
}


function solution(inputString){

  // function #3: checkes if function#1 returns any indexes (checks if the string has parenthesis)
  // if no - return String, if yes - calls function#2
  
  let indexes = getStartAndEndIndexes(inputString);
  if(indexes[0]==null){
    return inputString
  };
  let reverseInputString = reverse(indexes[0],indexes[1],inputString);
  return solution(reverseInputString)
}