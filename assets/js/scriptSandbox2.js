// Assignment Code
var generateBtn = document.querySelector("#generate");

//function generatePassword()
function generatePassword() {
  
  var passwordOptions = [];
  
  var guaranteedChar = [];
  
  var password = [];
  
  var charTypeCounter = 0;
  
  var passwordLength;
  
  var setPassword = [];
  
  // var passwordChoices = {
      //   userLength: passwordLength,
      //   wantUpperCase: hasUpperCase,
      //   wantLowerCase: hasLowerCase,
      //   wantNumbers: hasNumbers
      //   wantSpecChar: hasSpecCharacters,
      // };

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

// if (passwordLength === null) {
  //   return;
  // } else if (isNaN(passwordLength)) {
    //   alert("That is not a number.");
    //   generatePassword();
    // } else if (passwordLength < 8) {
      //   alert("It must be at least 8 characters long.");
      //   generatePassword();
      // } else if (passwordLength > 128) {
        //   alert("It must no more than 128 characters long.");
        //   generatePassword();
        // } else {
          //   console.log(passwordLength);
          //   // chooseCharacters();
          // };
          
          // return "It's working";

passwordLength = Math.floor(Number(window.prompt("How many characters would you like the password to be? It must be between 8 and 128.")));
          
          if (Number.isNaN(passwordLength)) {
  alert("That is not  a number.");
  return null;
}
if (passwordLength.length < 8) {
  alert("It must be at least 8 characters long.");
  return null;
}
if (passwordLength.length > 128) {
  alert("It must be less than 128 characters long.");
  return null;
};

  // function chooseCharacters() {
    var userOptions = confirm("Should we include uppercase letters in the password?");//var hasUpperCase
  
    if (userOptions === true) {
      passwordOptions = passwordOptions.concat(uppercaseAlphabet);
      guaranteedChar.push(uppercaseAlphabet[Math.floor(Math.random() * uppercaseAlphabet.length)]);
      charTypeCounter++;
      console.log(passwordOptions);
      console.log(guaranteedChar);
    };
  
    var userOptions = confirm("Should we include lowercase letters in the password?");//var hasLowerCase
  
    if (userOptions === true) {
      passwordOptions = passwordOptions.concat(lowercaseAlphabet);
      guaranteedChar.push(lowercaseAlphabet[Math.floor(Math.random() * lowercaseAlphabet.length)]);
      charTypeCounter++;
      console.log(passwordOptions);
      console.log(guaranteedChar);
    };
  
    var userOptions = confirm("Should we include numbers in the password?");//var hasNumbers
  
    if (userOptions === true) {
      passwordOptions = passwordOptions.concat(numbers);
      guaranteedChar.push(numbers[Math.floor(Math.random() * numbers.length)]);
      charTypeCounter++;
      console.log(passwordOptions);
      console.log(guaranteedChar);
    };
  
    var userOptions = confirm("Should we include special characters in the password?");//var hasSpecCharacters
  
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
  
    // if (charTypeCounter >= 1) {
    //   getRandomChar();
    //   // return chooseCharacters();
    // } else {
    //   alert("You must choose at least 1 character type!");
    //   passwordOptions.splice(0, passwordOptions.length);
    //   charTypeCounter = 0;
    //   chooseCharacters();
    // };
  // };

  // chooses passwordOptions characters randomly to fill the rest of the guaranteedChar array
  // function getRandomChar() {
    for (var i = 0; i < (passwordLength - charTypeCounter); i++) {
      guaranteedChar.push(passwordOptions[Math.floor(Math.random() * passwordOptions.length)]);
    };
    console.log(guaranteedChar);
    // for (var i = 0; i < userLength; i++) {
    //   setPassword.push (guaranteedChar[Math.floor(Math.random() * guaranteedChar.length)]);
    // };

    function shuffleArray(guaranteedChar) {
      var curId = guaranteedChar.length;
      while (0 !== curId) {
        var randId = Math.floor(Math.random() * curId);
        curId -= 1;
        var tmp = guaranteedChar[curId];
        guaranteedChar[curId] = guaranteedChar[randId];
        guaranteedChar[randId] = tmp;
      };
      return guaranteedChar;
    };
    
    console.log(guaranteedChar);

  //   shufflePasswordChar();
  //   guaranteedChar.splice(0, guaranteedChar.length);
  //   passwordOptions.splice(0, passwordOptions.length);
  //   charTypeCounter = 0;
  //   // return getRandomChar();
  // // };

  // function shuffleArray() {
  //   password = guaranteedChar.sort((a, b) => 0.5 - Math.random());
  //   console.log(password);
  //   return guaranteedChar;
  // };

  setPassword = shuffleArray(guaranteedChar);

  password = setPassword.join("");

  return password;
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
};

generateBtn.addEventListener("click", writePassword);

//   function shufflePasswordChar(setPassword) {
//     var curId = guaranteedChar => {
//       for (var i = guaranteedChar.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = guaranteedChar[i];
//         guaranteedChar[i] = guaranteedChar[j];
//         guaranteedChar[j] = temp;
//       }
//     }
//     console.log(password);
//     writePassword();
//   };
// };

// function randomizeArray(arr) {
//   var randomI = Math.floor(Math.random() * arr.length);  //(my computer changes this to Array.length)
//   var randomChar = arr[randomI]
//   return randomChar;
//  }

// function shuffleArray(setPassword) {
//   var curId = setPassword.length;
//   while [0 !== curId] {
//     var randId = Math.floor(Math.random() * curId);
//     var tmp = setPassword[curId];
//     setPassword[curId] = setPassword[randId];
//     setPassword[randId] = tmp;
//   }
//   return setPassword;
// };