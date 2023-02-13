// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function writePassword() {
// Get password length and then check that it meets length parameters.
    var getPasswordLength = prompt("Pick your Password length of at least 8 characters and no more than 128 characters.")
    if (getPasswordLength < 8){
        alert("Password must contain at least 8 characters!")
        return
    }
    else if (getPasswordLength > 128){
        alert("Password can't contain more than 128 characters!")
        return
    }
    else
// Ask user what characters they want to use.
    var getLowercase = confirm("Do you want to include lowercase? If so click ok.");
    var getUppercase = confirm("Do you want to include uppercase? If so click ok.");
    var getNumbers = confirm("Do you want to include numbers? If so click ok.");
    var getSpecialCharacters = confirm("Do you want to include special characters? If so click ok.");
    console.log(getPasswordLength, getLowercase, getUppercase, getNumbers, getSpecialCharacters);
    if (!getLowercase && !getUppercase && !getNumbers && !getSpecialCharacters){
        alert("You must pick SOMETHING!");
    };
   
    // Create strings to use for password characters
    var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "1234567890";
    var specialCharacters = "\'[`!@#$%^&*()_+-=[]{};\:\"";
    
    // Create password.  
    function generatePassword(){
        var password = '';
        var characterPool;
    
    //    Add character choices to character pool
        if (getLowercase){
            characterPool = characterPool + lowercaseLetters;
        }
        if (getUppercase){
            characterPool = characterPool + capitalLetters;
        }
        if (getNumbers){
            characterPool = characterPool + numbers;
        }
        if(getSpecialCharacters){
            characterPool = characterPool + specialCharacters;
        }
        console.log(characterPool)
        // Random character select from pool
        for (i = 0; i < getPasswordLength; i++){
            password = password + characterPool.charAt(Math.floor(Math.random() * characterPool.length));
        }
        return password

    }
    
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    console.log(password)

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);