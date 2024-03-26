// Show Slider Value
let slider = document.getElementById("passwordRange");
let output = document.getElementById("sliderNum");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
};

// Copy On Click
function copyOnClick() {
  // Get the text field
  let copyPassword = document.getElementById("passwordOut");

  // Select the text field
  copyPassword.select();
  copyPassword.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyPassword.value);

  // Alert the copied text
  alert("Copied the text: " + copyPassword.value);
}

// All of cause of Prettier
const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
const alphabetUpper = alphabetLower.toUpperCase();
const numbers = "1234567890";
const symbols = "~`!@#$%^&*()_-+={[}],|:;<>.?/";
// ------------------------------------------------

let passwordlength = slider.value;
let password = "";
let characters = alphabetUpper + alphabetLower + numbers + symbols;

//Generates the password
function generatePassword() {
  for (let i = 1; i <= passwordlength; i++) {
    let char = Math.floor(Math.random() * characters.length + 1);

    password += characters.charAt(char);
  }
  return password;
}

// Chat gpt eww gross (it does work tho)
// document
//   .getElementById("generateButton")
//   .addEventListener("click", function () {
//     let passwordLength = 10; // specify your desired password length
//     let characters =
//       "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // specify the characters to include in the password
//     let password = generatePassword(passwordLength, characters);
//     let text = document.getElementById("passwordOut");
//     text.value = password;
//   });

// function generatePassword(length, chars) {
//   let password = "";
//   for (let i = 0; i < length; i++) {
//     let char = Math.floor(Math.random() * chars.length);
//     password += chars.charAt(char);
//   }
//   return password;
// }

// Displays the generated password
// let text = document.getElementById("passwordOut");
// text.value = generatePassword();
