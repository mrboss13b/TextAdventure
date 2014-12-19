/*
NOTES:
    This file contains the overall game logic - including
functions that display output, drive the game loop, etc.
    You are not required to have all of these functions, nor
any of them - that is up to you. However, you are permitted to
use any of this code in your own solution, with whatever changes
and additions you need to make.
*/

/*
    Before starting the game proper, we might ask the user to enter some info.
    Note that this takes advantage of adding and removing event listeners.
    If we want the player to go through more than one intro screen, then
    instead of calling gameStart() we could call the next intro function.
    We can set up a series of these functions, and sort of bounce from one
    to the next through clever use of the listeners.
*/
function gameIntro() {
    var inputBox = document.querySelector("input");
    var listener = function(event) {
        if (event.keyCode === 13) {
            // remove this listener before continuing so it only runs once
            event.target.removeEventListener("keyup", listener);
            customizePlayer(this.value);
            gameStart();
        }
    };
    inputBox.addEventListener ("keyup", listener);
}

/*
    Start the main game loop.
*/
function gameStart() {
    distributeItems();
    document.getElementById("game").innerHTML =
	"<output id=\"scene\">  \
          <p id=\"descrip\"> \
              You have been shrunken to the size of a skittle \
          </p> \
          <p id=\"feedback\"> \
              Good luck \
          </p> \
          <label id=\"actionLabel\" for=\"action\"> What will you do? </label> \
     </output> \
               \
     <section> \
         <input id=\"action\" type=\"text\" placeholder=\"Enter an action here...\"/> \
     </section>";

    document.getElementById("actionLabel").innerHTML = "What will you do " + player.name + "?";
    document.getElementById("feedback").innerHTML = "Good luck " + player.name + "!";

    report("");

    var inputBox = document.querySelector("input");
    inputBox.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            gameStep(this.value);
            this.value = "";
        }
    });
    // we should also perform a few other start-of-game tasks, such as
    //  - set the player's starting propreties (location and any initial items)
    //  - display the help (list of commands)
    //  - display the initial scene
    //  - anything else you need to do before the user starts entering commands
}

/*
    Run one pass of the game loop.
*/
function gameStep(input) {
    console.log("check");
    var cmd = interpret(input); // parse the user input
    var result = execute(cmd); // run the desired command
    report(result); // display the results on the screen
}

/*
    Parse the user's input and use it to customize certain player properties.
*/
function customizePlayer(input) {
    // here we should set the player's name and/or other properties
    player.name = input;

    // give the player some stuff to start with
    player.items.push("tic tacs");
    player.items.push("bottle cap");
    player.items.push("rubber band");
}

/*
    Parse and normalize the user input string.
*/
function interpret(input) {
    var cmd = {}, tokens = input.trim().toLowerCase().split(" ");
    cmd.action = tokens.shift();
    if (tokens.length != 0) {
        cmd.target = tokens.join(" ");
    } else {
        cmd.target = undefined;
    }
    console.log("interpret, action: " + cmd.action + " target: " + cmd.target);
    return cmd;
}

/*
    Perform the desired player action.
*/
function execute(command) {
    var result = "Command not OK";
    if (player.won) {
        result = "You won! Go outdoors and get some fresh air!";
        return result;
    }

    try {
        result = player[command.action](command.target);
    } catch (err) {
        result = "not a valid action: " + command.action + ".\n";
    }
    return result + checkForWinning();
}

/*
    Display any results/changes on the page.
*/
function report(result) { // note: parameter not currently used
    displayActions();
    displayInventory();
    displayScene();
    displayFeedback(result);
	//displayAdjacent();
}


/*
    Loop over each player method and add it to the Web page.
*/
function displayActions() {
    var field, action, actionList;
    var winActions = ["relax", "gloat", "exit browser", "play again"];
    actionList = document.querySelector("#help > ul");
    clearContent(actionList);

    if (player.won) {
        for (i = 0; i < winActions.length; i++) {
            action = document.createElement("li");
            action.textContent = winActions[i];
            actionList.appendChild(action);
        }
    } else {
      for (field in player) {
          if (player[field] instanceof Function) {
              action = document.createElement("li");
              action.textContent = field;
              actionList.appendChild(action);
          }
      }
    }
}
function displayAdjacent() {
	var list, location, locationList;
	list = getAdjacentNames(player.location);
	locationList = document.querySelector("#locations > ul");
	clearContent(locationList);
	for (i = 0; i < list.length; i++) {
		location = document.createElement("li");
        location.textContent = list[i];
        locationList.appendChild(location);
	}
}


function getAdjacentNames(locNumber) {
	var list = [];
	var i;
	for (i = 0; i < map.locations.length;i++) {
		if (isAdjacent(locNumber, i)) {
			list.push(map.locations[i].name);
		}
	}
	return list;
}


/*
    Loop over each inventory item and add it to the Web page.
*/
function displayInventory() {
    var i, item, inventory;
    inventory = document.querySelector("#inventory > ul");
    clearContent(inventory);
    for (i in player.items) {
        item = document.createElement ("li");
        item.textContent = player.items[i];
        inventory.appendChild(item);
    }
}

/*
    Get the description of the player's current location and write it to the page.
*/
function displayScene() {
    var scene = "";
    var i;

    if (map.locations[player.location].items.length == 0) {
        scene += "You are in room \"" + map.locations[player.location].name + "\" - " +  map.locations[player.location].scene + ". \nIt is empty. Move along.\n";
    } else {
        scene += "You are in room \"" + map.locations[player.location].name + "\" - " +  map.locations[player.location].scene + ". \nIt contains: \n  ";

        for (i = 0; i < map.locations[player.location].items.length; i++) {
            scene += (map.locations[player.location].items[i]);
            if (i ==  map.locations[player.location].items.length - 1) {
                scene += ".";
            } else {
                scene += ", ";
            }
        }
    }


    console.log(scene);
    document.getElementById("descrip").innerHTML = scene;
}

/*
    This could be used along with a new paragraph element to display certain messages.
*/
function displayFeedback(msg) {
    var i;
	var list = getAdjacentNames(player.location);
    console.log("displayFeedback, " + msg);
	msg = msg + "You can choose: ";
	for (i= 0; i < list.length; i++) {
	    msg += ("\"" + list[i] + "\", ");
	}
	document.getElementById("feedback").innerHTML = msg;

}

/*
    This is an example of recognizing the need for a helper function and then writing it!
    We could just set innerHTML to empty string - but this is better (more efficient)!
*/
function clearContent(node) {
    while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }
}

window.onload = gameIntro; // game starts only after the page is loaded

