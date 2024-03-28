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
}

// All of cause of Prettier
const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
const alphabetUpper = alphabetLower.toUpperCase();
const numbers = "1234567890";
const symbols = "~`!@#$%^&*()_-+={[}],|:;<>.?/";
// ------------------------------------------------
let characters = alphabetUpper + alphabetLower + numbers + symbols;

//Generates the password
function generatePassword() {
  let passwordlength = slider.value;
  let password = "";

  // Displays it
  let text = document.getElementById("passwordOut");

  for (let i = 1; i <= passwordlength; i++) {
    let char = Math.floor(Math.random() * characters.length + 1);

    password += characters.charAt(char);
  }
  // Displays it
  text.value = password;
  return password;
}
