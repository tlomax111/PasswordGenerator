// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


var upArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

var lowArr = "abcdefghijklmnopqrstuvwxyz".split("")


var numArr = "1234567890".split("")

var specialArr = "!@#&*$".split("")

var userArr = []

var numl

console.log(lowArr)

Math.random


console.log(userArr)


//You get a prompt that asks how many characters you want in your password

  var numLength = prompt("How many characters world you like in your password?")
     console.log(numLength)
  
    //When the user choses a password length the computer chooses 

    function passwordLength() {
      var length = 128;
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        password = "";
      for ( var i = 0, i = charset.length; i < length; i++ ) {
          password += charset.userArr(Math.floor(Math.random() * [i]))}

    }

//You are asked to confirm if you want special characters in your password 

 var specialChar = confirm("Would you like special characters included your password?")
     console.log(specialChar)
if (specialChar){
      for ( var i = 0; i < specialArr.length; i++ ) {
        userArr.push(specialArr[i])

      }


//You are asked to confirm if you want number in you password 

var  num =  confirm("Would you like numbers included your password?")

  if (num) {
    for ( var i = 0; i < numArr.length; i++) {
      userArr.push(numArr[i])
    }
  }

    console.log(num)

//You are asked to confirm if you want lower case letters in your password

var lowerCase = confirm("Would you like lower case letters included your password?")
    console.log(lowerCase)

if (lowerCase) {
  for ( var i = 0; i < lowArr.length; i++){
    userArr.push(numArr[i])
  }
}

//You are asked to confirm if you want uppercase letters in your password


var upperCase = confirm("Would you like uppercase letters in you password?")
  console.log(upperCase)

if (upperCase){
   for ( var i = 0; i < upArr.length; i++) {
       userArr.push(numArr[i])
   }
}

console.log(userArr)

  }






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
