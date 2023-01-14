// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    passwordCharacters = '0123456789abcdefghijklmnopqrstuvwxyz!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~'.split (
      ''
    );
    var random = Math.floor(Math.random() * passwordCharacters.length);

    return passwordCharacters[random];

  }
  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
