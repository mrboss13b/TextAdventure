var roomTwo = new Location("Scanner Housing", "sufficently creepy");

var roomThree = new Location("Toner Pit", "nightmare fuel");

var locations = [roomOne, roomTwo, roomThree];

var connections = [
        [0,1,1],
        [1,0,1],
        [1,1,0]
];

var map = function(locations, connections);

