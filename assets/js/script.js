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
    //notifies user if they entered a value outside of min/max range
    if (passwordLength < 8 || passwordLength > 128) {
      return "Please input a value between 8 and 128";
    } 
    
    //prompts user for characters to include in generated password
    var lowercaseAlphaConfirm = window.confirm("Would you like to include lowercase alphabet letters?");
    var uppercaseAlphaConfirm = window.confirm("Would you like to include uppercase alphabet letters?");
    var numericCharConfirm = window.confirm("Would you like to include numeric characters?");
    var specialCharConfirm = window.confirm("Would you like to include special characters?");
      

    //create separate arrays for each character criteria
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

    //if statements to determine which characters to include in password as set by user prompts
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
    //if statement to notify user that they must select at least 1 criteria 
    if (lowercaseAlphaConfirm == false && uppercaseAlphaConfirm == false && numericCharConfirm == false && specialCharConfirm == false) {
      window.confirm("You must select at least 1 password character criteria.");
      return "Please regenerate password";
    }

    //summarize user password criteria determined by prompts
    window.confirm(`Thank you for confirming. Your password criteria is set as the following: \nCharacter length: ${passwordLength} \nLowercase alphabet: ${lowercaseAlphaConfirm} \nUppercase alphabet: ${uppercaseAlphaConfirm} \nNumbers: ${numericCharConfirm} \nSpecial characters: ${specialCharConfirm}`);

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
