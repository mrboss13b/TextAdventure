// Global player object (later this will no longer be global)
var player = {
	items: [],
	pickup: function(item){
		this.items.push(item);
	},
	drop: function(item){
		var pos = this.items.indexOf(item);
		if (pos >= 0) {
			this.items.splice(pos, 1);
		}
	}
}

// parse and normalize the user input string
function interpret (input) {
	var words = message.split(" "); //split up words
	var action = words.shift(); // pulls the first
	var object = words.toString(); // puts whats left into a string
	console.log('calling interpret'); // replace this with the real code
}

// perform the desired player action
function execute (command) {
	console.log('calling execute'); // replace this with the real code
}

// display any results/changes on the page
function report () {
	console.log('calling report'); // replace this with the real code
}

// run one pass of the game loop
function gameStep (input) {
	var cmd = interpret(input); // parse the user input
	var result = execute(cmd); // run the desired command
	report(result); // display the results on the screen
}

var gameStart = function() {
	var inputBox = document.querySelector("input");
	inputBox.addEventListener("keyup", function(event){
		if (event.keyCode === 13) {
			gameStep(this.value);
		}
	});
}

window.onload = gameStart; // game starts only after the page is loaded

/*Instructions
Clone your TextAdventure repository if it is not already on your local computer.

Open the game.js JavaScript file in a text editor (nano, gedit, etc.).

Remove any code that you had written during the last Lab exercise.

Build a rudimentary outline for your game:

Create a global player object containing an items array and both pickup and drop methods.

Add a global function named interpret that:

takes in a string

creates a local, empty object

trims it and splits it into an array based on whitespace

removes the first element of this array using shift and assigns it to object's the action property

joins the remaining elements into a single string and assigns this to the object's object property

Add a global function named execute that:

takes an object

gets the action property of the object and looks up the player function by that name

calls this function on the object property

Add a function named report that loops over the player's items and sets the content of the "#inventory > ul" element so that it displays all of the items.

Add a function named gameStep the takes a string as input and then calls interpret, execute and report.

Add an event listener for the keyup event of your Web page's text box - if Enter is pressed, this listener should call the gameStep function, passing the value of the text box as the argument.

*/
