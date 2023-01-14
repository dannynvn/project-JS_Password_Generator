// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //prompt user for amount of characters to include for password length; minimum is 8; maximum is 128
  var passwordLength = Number(prompt("How many characters would you like your password to contain? (min: 8 characters / max: 128 characters)"));
  var passLengthCheck = false;
  while(passLengthCheck == false) {
    var passwordLength = Number(prompt("Please enter a value between 8 and 128."));
    if (passwordLength < 8 || passwordLength > 128) {
      passLengthCheck = false;
    } else {
      passLengthCheck = true;
    }
  } 

  // //prompt user if they'd like to include lowercase alphabet characters
  // var lowercaseAlphabet = window.confirm("Would you like to include lowercase alphabet letters?");

  // //prompt user if they'd like to include uppercase alphabet characters
  // var uppercaseAlphabet = window.confirm("Would you like to include uppercase alphabet letters?");

  // //prompt user if they'd like to include numeric characters
  // var numericChar = window.confirm("Would you like to include numeric characters?");

  // //prompt user if they'd like to include special characters
  // var specialChar = window.confirm("Would you like to include special characters?");


  function generatePassword() {
    passwordCharacters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~'.split (
      ''
    );
    var passwordString = ''
    
    for (var i = 0; i < 20; i++) {
      var random = Math.floor(Math.random() * passwordCharacters.length);
      passwordString += passwordCharacters[random];
    }
    return passwordString;

  }

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
