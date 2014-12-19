
function Location(locationName,locationScene){
	this.name = locationName,
	this.scene =locationScene,
    this.items = [];
}

var roomOne = new Location("Upper Tray", "grey plastic spires");

var roomTwo = new Location("Scanner Housing", "plate glass terror");

var roomThree = new Location("Colate Assembly", "the horror");

var roomFour = new Location("Roller Trap", "cylinders of spinning death");

var roomFive = new Location("Paper Storage", "The great white void");

var roomSix = new Location("Cartridge Carrier", "Insert fear");

var roomSeven = new Location("Toner Pit", "watch your footing");

var roomEight = new Location("The Shredder", "It all comes to this");

var map = {
	locations : [ roomOne, roomTwo, roomThree, roomFour, roomFive, roomSix, roomSeven, roomEight ],
	connections : [
        [0,1,0,1,0,0,0,0],
        [1,0,0,0,1,0,0,0],
        [0,0,0,0,1,0,1,0],
        [1,0,0,0,1,1,0,0],
        [0,1,1,1,0,1,1,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,0,1,0,0,1],
        [0,0,0,0,0,0,1,0]
]
};

function inputRoomIndex(inputString) {
	for (i = 1; i < map.locations.length; i++) {
	    if (map.locations[i].name.toLowerCase() == inputString) {
	    return i;
	    }
	}
	return -1;
}

function isAdjacent(currentLocation, requestedLocation) {
    console.log("isAdjacent");
    console.log("currentLocation: " + currentLocation.toString() + " requestedLocation: " + requestedLocation.toString());
    if (map.connections[currentLocation][requestedLocation] == 1) {
        return true;
    } else {
        return false;
    }
}


var allItems = ["cat", "dog", "eraser", "button", "wire", "gum", "gold", "crap", "dead rat", "diamond ring"];

function distributeItems() {
    var locationNumber = 0;
    var i;

    for (i = 0; i < allItems.length; i++) {
        locationNumber = Math.floor(Math.random() * map.locations.length);
        map.locations[locationNumber].items.push(allItems[i]);
    }
}

