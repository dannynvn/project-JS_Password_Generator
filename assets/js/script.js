// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

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
