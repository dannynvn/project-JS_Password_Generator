// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    //prompt user for amount of characters to include for password length; minimum is 8; maximum is 128
    var passwordLength = Number(prompt("How many characters would you like your password to contain? (min: 8 characters / max: 128 characters)"));

    // var passLengthCheck = false;
    // while(passLengthCheck == false) {
    //   if (passwordLength < 8 || passwordLength > 128) {
    //     passLengthCheck = false;
    //   } else {
    //     passLengthCheck = true;
    //   }
    // } 

    //prompt user if they'd like to include lowercase alphabet characters
    var lowercaseAlphaConfirm = window.confirm("Would you like to include lowercase alphabet letters?");
    //prompt user if they'd like to include uppercase alphabet characters
    var uppercaseAlphaConfirm = window.confirm("Would you like to include uppercase alphabet letters?");
    //prompt user if they'd like to include numeric characters
    var numericCharConfirm = window.confirm("Would you like to include numeric characters?");
    //prompt user if they'd like to include special characters
    var specialCharConfirm = window.confirm("Would you like to include special characters?");
      

    //create separate arrays for each criteria
    var lowercaseAlpha = 'abcdefghijklmnopqrstuvwxyz'.split (
      ''
    );
    var uppercaseAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split (
      ''
    );
    var numericChar = '0123456789'.split (
      ''
    );
    var specialChar = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~'.split (
      ''
    );

    //if logic determining which characters to include in password; determined through user prompts
    var passwordCharacters = []
    if (lowercaseAlphaConfirm == true) {
      passwordCharacters = [...passwordCharacters, ...lowercaseAlpha];
    } 
    if (uppercaseAlphaConfirm == true) {
      passwordCharacters = [...passwordCharacters, ...uppercaseAlpha];
    }
    if (numericCharConfirm == true) {
      passwordCharacters = [...passwordCharacters, ...numericChar];
    } 
    if (specialCharConfirm == true) {
      passwordCharacters = [...passwordCharacters, ...specialChar];
    }  

    //randomly choose and append characters into one final password string
    var passwordString = ''
    for (var i = 0; i < passwordLength; i++) {
      var random = Math.floor(Math.random() * passwordCharacters.length);
      passwordString += passwordCharacters[random];
    }
    return passwordString;
  }

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
