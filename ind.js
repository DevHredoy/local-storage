// there will be a function.which will return the whole html format

function home() {
  return `<div>
<h2>Demo of local storage saving</h2>
<section><label for="in">put your text here </label>
<input type="text" name="in" id="input_id">

<button id="save_data">save</button>
<button id="delete_data">delete</button>
<p id="inputted"></p>
</section>

</div>`;
}

home();
document.getElementById("mainE").innerHTML = home();
//-----------------------------------
// at the very first time when the initial rendering will take place then
//this will run and as there was nothing so from the blank space it will try to
// take the input and the input will be blank
// the new version of code solved this issue but putting this code inside the functio
//in save button and this took the input value perfectly as expectedly.

// let inputVal = document.getElementById("input_id");
// let hredoy = inputVal.value;
// console.log("value from the input", hredoy);
// // after the button press this function will come to act

// function savebutton(userInput) {
//   //this userInput is the stroke which will come from the userInput.

//   document.getElementById("inputted").innerText = userInput;
//   console.log("hredoy:", hredoy);
// }

// document
//   .getElementById("save_data")
//   .addEventListener("click", () => savebutton(superJeep));
// ------------------------------------

function savebutton() {
  // Get the input element by ID.
  let inputVal = document.getElementById("input_id");

  // Get the value from the input element.
  let userInput = inputVal.value;

  // Set the inputted text in the paragraph element.
  document.getElementById("inputted").innerText = userInput;
}

// Add an event listener to the save_data button.
document.getElementById("save_data").addEventListener("click", savebutton);
