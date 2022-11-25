// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

var passwordOptions = [];

//object to store user inputs
// var passwordChoices = [
//   userLength: length,
//   wantLowerCase: hasLowerCase,
//   wantUpperCase: hasUpperCase,
//   wantSpecChar: hasSpecChar,
//   wantNumbers: hasNumbers
// ];

// console.log(passwordChoices);
//   return passwordChoices;

var charTypeCounter = 0;

//numbers array (2 different ways)
var numbers = Array.from(Array(10).keys());
console.log(numbers);

// var numbers2 = [...Array(10).keys()];
// console.log(numbers2);

//uppercase letter array
var ALPHA = Array.from(Array(26)).map((e, i) => i + 65);
var uppercaseAlphabet = ALPHA.map((x) => String.fromCharCode(x));
console.log(uppercaseAlphabet);

//lowercase letter array
var alpha = Array.from(Array(26)).map((e, i) => i + 97);
var lowercaseAlphabet = alpha.map((x) => String.fromCharCode(x));
console.log(lowercaseAlphabet);

//special characters array
var spec = Array.from(Array(16)).map((e, i) => i + 32);
var specCharacters = spec.map((x) => String.fromCharCode(x));
console.log(specCharacters);




//function generatePassword()
function generatePassword() {
  var passwordLength = parseInt(
    window.prompt(
      "How many characters would you like the password to be? It must be at least 8 characters long."
      )
  );
  console.log(length);

  if (Number.isNaN(passwordLength)) {
    alert("Password must be a numberic number");
    return null;
  } else if (passwordLength.length < 8) {
    alert("It must be at least 8 characters long.");
    return null;
  } else {
    chooseCharacters();
  };

  function chooseCharacters() {
    var userOptions = window.prompt("Should we include uppercase letters in the password?");
    
    if (userOptions.hasUpperCase) {
      passwordOptions = passwordOptions.concat(upperCaseAlphabet);
      // guaranteedChar.push(getRandomPasswordChar(upperCaseLetters));
      charTypeCounter++;
    };

    var userOptions = window.prompt("Should we include lowercase letters in the password?");

    if (userOptions.hasLowerCase) {
      passwordOptions = passwordOptions.concat(lowerCaseAlphabet);
      // guaranteedChar.push(getRandomPasswordChar(upperCaseLetters));
      charTypeCounter++;
    };

    var userOptions = window.prompt("Should we include numbers in the password?");
      
      if (userOptions.hasNumbers) {
        passwordOptions = passwordOptions.concat(numbers);
      // guaranteedChar.push(getRandomPasswordChar(numbers));
      charTypeCounter++;
    };

    var userOptions = window.prompt("Should we include special characters in the password?");
    
    if (userOptions.hasSpecialChars) {
      passwordOptions = passwordOptions.concat(specialCharacters);
      // guaranteedChar.push(getRandomPasswordChar(specialChars));
      charTypeCounter++;
    };
    
    if (charTypeCounter.length >= 2) {
      getRandomPasswordChar();
    } else {
      alert("You must choose at least 2 types of characters.");
      passwordOptions.splice(0, passwordOptions.length);
      charTypeCounter = 0;
      chooseCharacters();
    }
  };
};// more functions need to be nested before this function finished...passwordLength is needed later, at the very least.

//chooses a passwordOptions character randomly
function getRandomPasswordChar() {
  var passwordCharacter = generateAlphabet();
  return passwordCharacter[Math.round(Math.random() * passwordCharacter.length)];// * passwordLength
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
};

//check for presence each type of chosen character in generated password.  if present {display} else {redo generation}



// var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "`", "?", "/", "<", ">", ",", "."];


//chooses an uppercase letter randomly
// function getRandomUpperCaseLetter() {
//   var uppercaseAlphabet = generateAlphabet();
//   return uppercaseAlphabet[Math.round(Math.random() * uppercaseAlphabet.length)];
// };

//chooses an lowercase letter randomly
// function getRandomLowerCaseLetter() {
//   var lowercaseAlphabet = generateAlphabet();
//   return lowercaseAlphabet[Math.round(Math.random() * lowercaseAlphabet.length)];
// };

//chooses a number randomly
// function getRandomNumber() {
//   var numbers = generateAlphabet();
//   return numbers[Math.round(Math.random() * numbers.length)];
// };

//chooses a special character randomly
// function getRandomSpecChar() {
//   var specCharacters = generateAlphabet();
//   return specCharacters[Math.round(Math.random() * specCharacters.length)];
// };


// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

/*
  
  have a bunch of alerts asking if they want uppercase, lowercase, special characters, numbers, and length (length first)
  
  specialCharArray
  uppercaseArray
  lowercaseArray
  
  it chooses from those lists randomly.
  
  function generatePassword
  
  
  
  
  function passOptions()
  
  
  //create a conditional to make sure at least one type of char is selected
  if (choseUpperCase === false && choseLowerCase === flase && choseSpecialCharacters === flase && choseNumbers === false) {
    alert('You must choose at least one char type');
  };
  
  
  passOptions();
  
  
  //function for randomizing elements from an array
  function randomizeArray(arr) {
    
    //create a variable to store the random arr.length  (LOOK THIS TERM UP)
    var randomI = Math.floor(Math.random() * arr.length);  //(my computer changes this to Array.length)
    
    //create a variable to store the random array
    var randomChar = arr[randomI]
    
    //return the random array
    return randomChar;
  }
  
  
  //write a function to actually generate the password
  function genPassword() {
    //create a variable to store the user object from our user input function
    var userOptions = passOptions();
    
    //variable to store the password as its being created we will be PUSHING the results as they are happening here
    var result = [];
    
    //create an array to store the types of characters to include in the password
    var possibleChar = [];//loop through this and it picks out random characters
    
    //create an array to store guaranteed characters
    var guaranteedChar = []; //random chars get put here
    
    //check if options exist if not exit the function
    if(!userOptions) return null;
    
    //conditional statements that add array of (lowerCase) characters into array of possible characters based on the users input(4x)
    if (userOptions.hasLowerCase) {
      possibleChar = possibleChar.concat(lowerCase);
      guaranteedChar.push(someFunction(lowerCase));
    }
    
    
    
    
    //make a function (someFunction) that randomizes my characters
    
    
    
    //create a for loop to iterate over the password length from the options object, selection random I from the array of possible chars, concacting and return them into the results of the variable.
    
    //create a for loop to mix in at least one of each guaranteed characters into the result to mix in a guaranteed char into result
    
    //return the result and make it into a string and pass it into writePassword
    
    return result.join('');
    
  
  }
  
  
  //variable to change uppercase to lower case and make a array vs making another full one
  //split to not have to flesch out arrays without writing it all out
  
  /*
  
  window.prompt("How many characters long do you want the password to be?  It must be at least 8 characters long.");
  
  if userCharLength > 8
  console.log
  set array length
  window.prompt("Do you want to use Uppercase letters?");
  if yes, concat arrays
  else 
  return
  
  window prompt("Do you want to use lowercase letters?")
  if yes, concat(array).toUpperCase
  else
  return
  
  window.prompt("Do you want to use numbers?")
  if yes, concat(array)
  else
  return
  
  window.prompt("Do you want to use special characters?)
  if yes concat(array)
  
  you must choose at least two character types
  
  if 
  
  
  
  if 
  randomly choose x number of characters from the array
  
  
  
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }
  
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 12;
  var password = "";
  
  */

// valid_input = false;
// while (!valid_input) {
//   var passwordLength = window.prompt("Choose how many characters long you want the password to be.  It must be at least 8 characters.");
//   if (!isNaN(passwordLength) && passwordLength >= 8) {
//     valid_input = true;
//     console.log(passwordLength);
//   }
// }

//   userLength: passwordLength,
//   wantLowerCase: hasLowerCase,
//   wantUpperCase: hasUpperCase,
//   wantSpecChar: hasSpecChar,
//   wantNumbers: hasNumbers
// ];