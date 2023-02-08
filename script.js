// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var getPasswordLength = prompt("Pick your Password length of at least 8 characters and no more than 128 characters.")
    if (getPasswordLength < 8){
        alert("Password must contain at least 8 characters!")
    }
    else if (getPasswordLength > 128){
        alert("Password can't contain more than 128 characters!")
    }
    else
    var getLowercase = confirm("Do you want to include lowercase? If so click ok.");
    var getUppercase = confirm("Do you want to include uppercase? If so click ok.");
    var getNumbers = confirm("Do you want to include numbers? If so click ok.");
    var getSpecialCharacters = confirm("Do you want to include special characters? If so click ok.");
    console.log(getPasswordLength, getLowercase, getUppercase, getNumbers, getSpecialCharacters);
    var capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var specialCharacters = ['[`!@#$%^&*()_+-=[]{};\':"\\|,.<>/?~]/'];
    function generatePassword(){
        var password = []
        for (var i = 0; i < getPasswordLength; i++){
            password.push(capitalLetters.charAt(Math.floor(Math.random() * getPasswordLength)))
        }
        return password
    }
    
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);