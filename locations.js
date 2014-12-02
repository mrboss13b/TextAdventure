

function Location(locationName,locationScene){
	this.name = locationName,
	this.scene =locationScene;
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
	locations : [roomOne, roomTwo, roomThree, roomFour, roomFive, roomSix, roomSeven, roomEight],
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

function Test(locationNumber) {
    var output = "From here, " + map.locations[locationNumber].name + ", you can travel to these rooms: \n";
    var i;
    for (i = 0; i < map.locations.length; i++) {
        if (map.connections[locationNumber][i] == 1) {
            output += ("  " + map.locations[i].name + " \n");
        }
    }
    
    console.log(output);
}

Test(0);
Test(1);
Test(2);
//Next, create an object called map that has the locations array and the connections matrix as its two properties.

//Finally, write a function that will test out the above code by printing the names of all Locations connected to Location #0.

