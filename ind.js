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
let inputVal = document.getElementById("input_id");
let hredoy = inputVal.value;
console.log("value from the input", hredoy);
// after the button press this function will come to act

function savebutton(userInput) {
  //this userInput is the stroke which will come from the userInput.

  document.getElementById("inputted").innerText = userInput;
  console.log("hredoy:", hredoy);
}



document
  .getElementById("save_data")
  .addEventListener("click", () => savebutton(superJeep));
