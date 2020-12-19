// Assignment code here
var generatePassword = function() {
  return "Bu-bye Cruel World!";
};

// Get references to the #generate element
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
