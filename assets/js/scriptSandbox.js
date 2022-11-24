/*

have a bunch of alerts asking if they want uppercase, lowercase, special characters, numbers, and length (length first)

specialCharArray
uppercaseArray
lowercaseArray

it chooses from those lists randomly.

function generatePassword

*/





function passOptions()

var length = parseInt (
  prompt('How many characters would you like the password to be?')
)
console.log(length);

if(Number.isNaN(length)) {
  alert('Password must be a numberic number')
  return null;
}

if (length < 8) {
  alert('It must be at least 8 characters long')
  return null;
};
















function passOptions()


//create a conditional to make sure at least one type of char is selected
if (choseUpperCase === false && choseLowerCase === flase && choseSpecialCharacters === flase && choseNumbers === false) {
    alert('You must choose at least one char type');
  };




//object to store user inputs
var passwordOptions = [
  userLength: length,
  wantLowerCase: hasLowerCase,
  wantUpperCase: hasUpperCase,
  wantSpecChar: hasSpecChar,
  wantNumbers: hasNumbers
];

console.log(passwordOptions)
return passwordOptions;


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