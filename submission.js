const findSum = function(array) {
  // your code here - don't forget to return a number!
  let list_sum = 0;
  for (let i = 0; i < array.length; i++){
      list_sum += array[i];
  }
  return list_sum
  
};

const findFrequency = function(array) {
  // your code here - don't forget to return an object!
  const nameCount = array.reduce(function(object, currentName) {
    // if "currentName" exists as a property in "object", increment its value by 1
    if (currentName in object)
        object[currentName]++;

    // if "currentName" does not exist as a property in "object" 
    // add it as a new property and set its value to 1
    else
        object [currentName] = 1;

    return object
  }, {})

  // Compare the number and find out the max
  function getMost(itemCount) {

    let mostKey;

    // Get the value of the first property in th itemCount object
    // Set this value is the largest
    let mostValue = Object.values(itemCount)[0];

    for (let key in itemCount){
        if (itemCount[key] >= mostValue){
            mostValue = itemCount[key];
            mostKey = key;
        } 
    }

    return mostKey; 
  }

  function getLeast(itemCount) {

    let leastKey;

    let leastValue = Object.values(itemCount)[0];


    for (let key in itemCount){
        if (itemCount[key] <= leastValue){
            leastValue = itemCount[key];
            leastKey = key
        }
    }

    return leastKey; 
  }

  // Present the most and the least frequent item respectively
  const presentFrequency = {most: getMost(nameCount), least: getLeast(nameCount)};

  return presentFrequency
};

const isPalindrome = function(str) {
  // your code here - don't forget to return a boolean!
  let strLowerCase = str.toLowerCase();

  let strLength = parseInt(str.length);

  for (i = 0; i <strLength/2; i++){
      if (strLowerCase[i] !== strLowerCase[strLength - 1 -i])
          return false;
  }
  return true
  
};

const largestPair = function(array) {
    // your code here - don't forget to return a number!
    
    // Check if the array has at least elements
    if (array.length < 2){
        throw new Error("Please ensure that the array must include two elements.");
    }
    
    // Check all elements must be integer 
    for (let i in array){
        if (!Number.isInteger(array[i])){
            throw new Error("All elements in the array must be integer.");
        }
    }
     
    // Initialize the variable that has max value
    let max = array[0]*array[1];

        for (let i =1; i<array.length; i++){
            let product = array[i] * array[(i+1) % array.length];
            if (product > max)
                max = product;
        }

    return max
  
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
  let strNew = '';
  let inParenth = false;

  for (let i=0; i < str.length; i++){
      if (str[i] === '('){
          inParenth = true;
          continue;
      }
      else if (str[i] === ')'){
          inParenth = false;
          continue;
      }

      else if (inParenth === false){
          strNew += str[i];
      }
  }
  return strNew;
  
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
  // Store score for the total of each letter scrabbled
  let scoreTotal = 0;

  let letterSet = {
    1: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
    2: ['d', 'g'],
    3: ['b', 'c', 'm', 'p'],
    4: ['f', 'h', 'v', 'w', 'y'],
    5: ['k'],
    8: ['j', 'x'],
    10: ['q', 'z']
  }

  const lowerCaseStr = str.toLowerCase();

  for (let i in lowerCaseStr){
    for (let score in letterSet){
        if(letterSet[score].includes(lowerCaseStr[i])){
            scoreTotal += parseInt(score)
        }
    }

  }
  return scoreTotal
  
};
