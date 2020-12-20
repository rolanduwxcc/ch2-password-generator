// ASCII Characters are being used for passwords, 33-126 is range of letters, numbers and 
//special characters that will be used. 
// 65-90 uppercase letters, 48-57 numbers 0-9, 97-122 lowercase letters

var generatePassword = function() {
  var passwordString="";

  window.alert("Please choose criteria options for password!");
  var length = window.prompt("Enter a number length between 8 and 128 of password: ");
  var useUpper = window.confirm("Should the password have upper case letters?");
  var useLower = window.confirm("Should the password have lower case letters?");
  var useNumeric = window.confirm("Should the password have numbers?");
  var useSpecial = window.confirm("Should the password have special characters (*, ! @ $, etc.)?");
  // return length + "|" + useUpper + "|" + useLower + "|" + useSpecial;


  while (passwordString.length < length) {
    var isUpper = false; isLower = false; isNumeric = false; isSpecial = false;
    var charValue = Math.floor((Math.random() * 93) + 33);
    console.log(charValue);
    var useCharValue = false;
    debugger;

    if (charValue >= 65 && charValue <=90) {
      isUpper = true; 
    }
    if (charValue >= 97 && charValue <= 122) {
      isLower = true;
    }
    if (charValue >= 48 && charValue <= 57) {
      isNumeric = true;
    }
    if (!isUpper && !isLower && !isNumeric){
      isSpecial = true;
    } 
    
    if (
      (isUpper && useUpper) ||
      (isLower && useLower) ||
      (isNumeric && useNumeric) ||
      (isSpecial && useSpecial)
      ) {
      useCharValue = true;
    }

    if (useCharValue) {
      passwordString = passwordString + String.fromCharCode(charValue);
    }
  }
  return passwordString;
};

// Get references to the #generate element this thing sets generateBtn to the whole html button element 
//in the html, so that at we can add an event listener to listen for a button click and that calls
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
