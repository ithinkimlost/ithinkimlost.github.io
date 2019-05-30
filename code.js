





var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// this is used to clean up code, avoid repetition

function inputLength() {
	return input.value.length;
}

function createListElement() {

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
}

function

button.addEventListener("click", function() {
	if (inputLength() > 0) {
		createListElement();
}
})

input.addEventListener("keypress", function(event) {


	if (inputLength() > 0 && event.keyCode===13) {
		createListElement();

}
})
