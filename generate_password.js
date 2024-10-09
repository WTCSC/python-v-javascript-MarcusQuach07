// Create a function named generatepassword and set the length to 12
function generatePassword(length = 12) {
// Make a constant named characters and input a list of numbers and characters with a _
const character = 'POIUYTREWQLKJHGFDSAMNBVCXZpoiuytrewqlkjhgfdsamnbvcxz0987654321_';
// let password be a empty list
let password = '';
// Create a for loop and let i = 0 but the i is less than length and keep adding to i
for (let i = 0; i < length; i++) {
// define result and add all the characters together, before that .charAt takes a given position and returns that character
// then it floors the number and randomizes it, then it multiplies by the characters length
    password += character.charAt(Math.floor(Math.random() * characters.length));
    }
// return the function password
    return password;
}

module.exports = generatePassword;