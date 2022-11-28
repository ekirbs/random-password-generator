// Assignment Code
var generateBtn = document.querySelector("#generate");

//uppercase letter array
var ALPHA = Array.from(Array(26)).map((e, i) => i + 65);
var uppercaseAlphabet = ALPHA.map((x) => String.fromCharCode(x));
console.log(uppercaseAlphabet);

//lowercase letter array
var alpha = Array.from(Array(26)).map((e, i) => i + 97);
var lowercaseAlphabet = alpha.map((x) => String.fromCharCode(x));
console.log(lowercaseAlphabet);

//numbers array
var numbers = Array.from(Array(10).keys());
numbers.toString();
console.log(numbers);

//special characters array
var spec = Array.from(Array(16)).map((e, i) => i + 32);
var specCharacters = spec.map((x) => String.fromCharCode(x));
console.log(specCharacters);

//function generatePassword()
function generatePassword() {
  
  var passwordOptions = [];
  
  var guaranteedChar = [];
  
  var password = [];
  
  var passwordLength;
  
  var charTypeCounter = 0;

  // Choose Password Length
  passwordLength = Math.floor(Number(window.prompt("How many characters would you like the password to be? It must be between 8 and 128.")));
  
  if (Number.isNaN(passwordLength)) { // ISSUE:  what if they click cancel?
    alert("That is not a number.");
    return null;
  };

  if (passwordLength < 8) {
    alert("It must be at least 8 characters long.");
    return null;
  };

  if (passwordLength > 128) {
    alert("It must be less than 128 characters long.");
    return null;
  };

  // Choose Character Types Used
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

  if (!userOptions) {
    alert("You must choose at least 1 character type!");
    return null;
  };

  // chooses passwordOptions characters randomly to fill the rest of the guaranteedChar array  
  for (var i = 0; i < (passwordLength - charTypeCounter); i++) {
    guaranteedChar.push(passwordOptions[Math.floor(Math.random() * passwordOptions.length)]);
  };

  // Fisher-Yates Randomizing Algorithm
  function shuffleArray(guaranteedChar) {
    var current = guaranteedChar.length;
    while (0 !== current) {
      var random = Math.floor(Math.random() * current);
      current -= 1;
      var temp = guaranteedChar[current];
      guaranteedChar[current] = guaranteedChar[random];
      guaranteedChar[random] = temp;
    };
    return guaranteedChar;
  };
    
  console.log(guaranteedChar);

  password = shuffleArray(guaranteedChar).join("");

  return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);