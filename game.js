

// parse and normalize the user input string
function interpret (input) {
    console.log('interpret');
    console.log(input);
	var words = input.split(" "); //split up words
    var action1 = words.shift(); // pulls the first
    console.log(action1);
    var object1 = words.shift(); // pulls the first
    console.log(object1);
    var command = {
        action: action1,
        object: object1
    }
	console.log('calling interpret'); // replace this with the real code
    return command;
}

// perform the desired player action
function execute (command) {
    console.log('execute');
	console.log('calling execute'); // replace this with the real code
    var result = "Command not OK";
    try {
        result = player[command.action.toUpperCase()](command.object);
    }
    catch(err) {
        console.log('not a valid action: ' + command.action + '.\n');
    }

    return result;
}

// display any results/changes on the page
function report (result) {
	console.log('report result: ' + result); // replace this with the real code
}

// run one pass of the game loop
function gameStep (input) {
    console.log('gameStep');
	var cmd = interpret(input); // parse the user input
	var result = execute(cmd); // run the desired command
	report(result); // display the results on the screen
}

//var gameStart = function() {
(function() {
    console.log('gameStart');
	var inputBox = document.querySelector("input");
	inputBox.addEventListener("keyup", 
        function(event){
            console.log('keyup');
            if (event.keyCode === 13) {
                console.log('keyup enter');
                gameStep(this.value);
            }
        }
    );
})();

//window.onload = gameStart; // game starts only after the page is loaded

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
