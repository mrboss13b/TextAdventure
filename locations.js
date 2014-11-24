
function Location( locationName,frightLevel){
	this.name = locationName,
	this.level = frightLevel;
}

var roomOne = new Location("Upper Tray", "ain't scared");

var roomTwo = new Location("Scanner Housing", "sufficently creepy");

var roomThree = new Location("Toner Pit", "nightmare fuel");

var locations = [roomOne, roomTwo, roomThree];

var connections = [
        [0,1,1],
        [1,0,1],
        [1,1,0]
];

var map = function(locations, connections);

//Next, create an object called map that has the locations array and the connections matrix as its two properties.

//Finally, write a function that will test out the above code by printing the names of all Locations connected to Location #0.

