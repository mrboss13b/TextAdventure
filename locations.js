
function Location(locationName,locationScene){
	this.name = locationName,
	this.scene =locationScene;
}

var roomOne = new Location("Upper Tray", "grey plastic spires all around, doors to Scanner Housing and Roller Trap");

var roomTwo = new Location("Scanner Housing", "plate glass terror, doors to Upper Tray and Paper Storage");

var roomThree = new Location("Colate Assembly", "the horror, what does colate even mean? doors to Paper Storage and Toner Pit");

var roomFour = new Location("Roller Trap", "cylinders of spinning death, and other poems, doors to Upper Tray, Paper Storage, and Cartridge Carrier");

var roomFive = new Location("Paper Storage", "The great white void, doors to Scanner Housing, Colate Assembly, Roller Trap, Cartridge Carrier and Toner Pit");

var roomSix = new Location("Cartridge Carrier", "Insert fear, or just shake it and pit it back, doors to Roller Trap and Paper Storage");

var roomSeven = new Location("Toner Pit", "Muck! No footing at all, doors to Colate Assembly Paper Storage and The Shredder");

var roomEight = new Location("The Shredder", "It all comes to this, door to Toner Pit and Naked Puzzle Basement");

var map = { 
	locations : [ roomOne, roomTwo, roomThree, roomFour, roomFive, roomSix, roomSeven, roomEight ],
	connections : [
        [0,1,0,1,0,0,0,0],
        [1,0,0,0,1,0,0,0], 
        [0,0,0,0,1,0,1,0],
        [1,0,0,0,1,1,0,0],
        [0,1,1,1,0,1,1,0],
        [0,0,0,1,1,0,0,0],
        [0,0,1,0,1,0,0,1],
        [0,0,0,0,0,0,1,0]
]
};

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

