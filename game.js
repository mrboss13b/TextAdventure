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

