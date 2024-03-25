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
  let copyPassword = document.getElementById("myInput");

  // Select the text field
  copyPassword.select();
  copyPassword.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyPassword.value);

  // Alert the copied text
  alert("Copied the text: " + copyPassword.value);
}
