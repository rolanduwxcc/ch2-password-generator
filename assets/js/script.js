//-------------------------------------------------Function to Generate Password
var generatePassword = function() {
  var passwordString="";
  var length = 0;

  //------------------------------------------------Get the criteria for the password
  while (length < 8 || length > 128) {
    length = parseInt(window.prompt("A password must be at least 8 characters, and no more than 128 characters long.\nEnter a number between 8 and 128: "));
  }
  while (!useUpper && !useLower && !useNumeric && !useSpecial) {
    window.alert("Choose at least one character type to include in password!");
    var useUpper = window.confirm("Should the password have upper case letters?");
    var useLower = window.confirm("Should the password have lower case letters?");
    var useNumeric = window.confirm("Should the password have numbers?");
    var useSpecial = window.confirm("Should the password have special characters (*, ! @ $, etc.)?");
  }
  
  console.log(length + "|" + useUpper + "|" + useLower + "|" + useSpecial + "|" + useNumeric);
  
  while (passwordString.length < length) {
    var isUpper = false; isLower = false; isNumeric = false; isSpecial = false;
    var charValue = Math.floor((Math.random() * 93) + 33);
    //console.log(charValue);
    var useCharValue = false;

    // ASCII characters are being used for passwords 
    // 33-126 is range of letters, numbers and special characters 
    // 65-90 uppercase, 48-57 numbers, 97-122 lowercase letters, everything else special chars
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
