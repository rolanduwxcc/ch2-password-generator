// ASCII Characters are
// 65-90 uppercase letters
// 48-57 numbers 0-9
// 97-122 lowercase letters
// the rest are special characters 33-126 is everything

var generatePassword = function() {
  var passwordString="";
  // return "Bu-bye Cruel World!";
  window.alert("Please choose criteria options for password!");
  var length = window.prompt("Enter a number length between 8 and 128 of password: ");
  var useUpper = window.confirm("Should the password have upper case letters?");
  var useLower = window.confirm("Should the password have lowerr case letters?");
  var useSpecial = window.confirm("Should the password have special characters (*, ! @ $, etc.)?");
  // return length + "|" + useUpper + "|" + useLower + "|" + useSpecial;

  for (var i = 0; i < length; i++) {
    var charValue = Math.floor((Math.random() * 93) + 33);
    console.log(charValue);
    // var useCharValue = false;

    // if (useUpper && (charValue >= 65 || charValue <=90)) {
    //   generatedPW = generatedPW + String.fromCharCode(charValue);
    // }
    // else if (useLower && (charValue >= 97 || charValue <= 122)) {
    //   generatedPW = generatedPW + String.fromCharCode(charValue);
    // }
    // else if (useSpecial)
    passwordString = passwordString + String.fromCharCode(charValue);
  }
  return passwordString;



};

// Get references to the #generate element
// this things sets generateBtn to the whole html button element in the html, so that
// at the bottom we add an event listener to listen for a click and that calls
// the writePassword function!!!!
var generateBtn = document.querySelector("#generate");
console.log("the value of generateBtn is ",generateBtn);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log("the value of passwordText is ",passwordText);

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
