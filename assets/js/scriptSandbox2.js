// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

var passwordOptions = [];

var guaranteedChar = [];

var password = [];

var charTypeCounter = 0;

var passwordLength;

//numbers array
var numbers = Array.from(Array(10).keys());
numbers.toString();
console.log(numbers);

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
  passwordLength = Math.floor(Number(window.prompt("How many characters would you like the password to be? It must be between 8 and 128.")));
  
  if (passwordLength === null) {
    return;
  } else if (isNaN(passwordLength)) {
    alert("That is not a number.");
    generatePassword();
  } else if (passwordLength < 8) {
    alert("It must be at least 8 characters long.");
    generatePassword();
  } else if (passwordLength > 128) {
    alert("It must no more than 128 characters long.");
    generatePassword();
  } else {
    console.log(passwordLength);
    chooseCharacters();
  };

  // if (Number.isNaN(passwordLength)) {
//   alert("That is not  a number.");
//   return null;
// } else if (passwordLength.length < 8) {
//   alert("It must be at least 8 characters long.");
//   return null;
// } else if (passwordLength.length > 128) {
//   alert("It must be less than 128 characters long.");
//   return null;
// } else {   
//   console.log(passwordLength);
//   chooseCharacters();
// };

  function chooseCharacters() {
    var userOptions = confirm("Should we include uppercase letters in the password?");
  
    if (userOptions === true) {
      passwordOptions = passwordOptions.concat(uppercaseAlphabet);
      guaranteedChar.push(uppercaseAlphabet[Math.floor(Math.random() * uppercaseAlphabet.length)]);
      charTypeCounter++;
      console.log(passwordOptions);
      console.log(guaranteedChar);
    };
  
    var userOptions = confirm("Should we include lowercase letters in the password?");
  
    if (userOptions === true) {
      passwordOptions = passwordOptions.concat(lowercaseAlphabet);
      guaranteedChar.push(lowercaseAlphabet[Math.floor(Math.random() * lowercaseAlphabet.length)]);
      charTypeCounter++;
      console.log(passwordOptions);
      console.log(guaranteedChar);
    };
  
    var userOptions = confirm("Should we include numbers in the password?");
  
    if (userOptions === true) {
      passwordOptions = passwordOptions.concat(numbers);
      guaranteedChar.push(numbers[Math.floor(Math.random() * numbers.length)]);
      charTypeCounter++;
      console.log(passwordOptions);
      console.log(guaranteedChar);
    };
  
    var userOptions = confirm("Should we include special characters in the password?");
  
    if (userOptions === true) {
      passwordOptions = passwordOptions.concat(specCharacters);
      guaranteedChar.push(specCharacters[Math.floor(Math.random() * specCharacters.length)]);
      charTypeCounter++;
      console.log(passwordOptions);
      console.log(guaranteedChar);
    };
  
    if (charTypeCounter >= 1) {
      getRandomChar();
      // return chooseCharacters();
    } else {
      alert("You must choose at least 1 character type!");
      passwordOptions.splice(0, passwordOptions.length);
      charTypeCounter = 0;
      chooseCharacters();
    };
  };

  // chooses passwordOptions characters randomly to fill the rest of the guaranteedChar array
  function getRandomChar() {
    for (var i = 0; i <= (passwordLength - charTypeCounter - 1); i++) {
      guaranteedChar.push(passwordOptions[Math.floor(Math.random() * passwordOptions.length)]);
    };
    shufflePasswordChar();
    guaranteedChar.splice(0, guaranteedChar.length);
    passwordOptions.splice(0, passwordOptions.length);
    charTypeCounter = 0;
    // return getRandomChar();
  };

  // function shufflePasswordChar() {
  //   password = guaranteedChar.sort((a, b) => 0.5 - Math.random());
  //   console.log(password);
  //   writePassword();
  // };
  // return generatePassword();
// };
  function shufflePasswordChar() {
    password = guaranteedChar => {
      for (var i = guaranteedChar.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = guaranteedChar[i];
        guaranteedChar[i] = guaranteedChar[j];
        guaranteedChar[j] = temp;
      }
    }
    console.log(password);
    writePassword();
  };
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
};