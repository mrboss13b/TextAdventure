// Global player object (later this will no longer be global)
var player = {
	name : "",
	location : 0,
	items: [],
	pickup: function(item){
		var pos = map.locations[this.location].items.indexOf(item);
		if (pos >= 0) {
			map.locations[this.location].items.splice(pos, 1);
            this.items.push(item);
            return "OK";
		} else {
            return "What? I don't see that here.";
        }
	},
	drop: function(item){
		var pos = this.items.indexOf(item);
		if (pos >= 0) {
			this.items.splice(pos, 1);
            map.locations[this.location].items.push(item);
            return "OK";
		} else {
            return "Don't have it.";
        }
	},
	walk : function(locationName){
        var destination = map.indexOf(locationName);
        
		if (locationName === undefined) {
            return "Where do you want to walk?";
        };
        if (destination !== locationName) {
            return "\"" + locationName.toString() + "\" is not a option!";
        };
        if (locationName == this.location) {
            return "You are already at room " + this.locationName + "!";
        };
        if (isAdjacent(this.location, destination)) {
            this.location = destination.location;
        } else {
            return "You can't get to room " + locationName + " from here! Try another room.";  
        };
        return "OK";
	},
	jump : function(object){
        console.log('calling jump'); // replace this with the real code
        return "OK";
	},
	duck : function(object){
        console.log('calling duck'); // replace this with the real code
        return "OK";
	},
	open : function(object){
        console.log('calling open'); // replace this with the real code
        if (object == undefined) {
            return "No object defined, Open what?"
        }
        return "OK";
	},
	climb : function(object){
        console.log('calling climb'); // replace this with the real code
        return "OK";
	},
	attack : function(object){
        console.log('calling attack'); // replace this with the real code
        return "OK";
	},
	block : function(object){
        console.log('calling block'); // replace this with the real code
        return "OK";
	}
}
