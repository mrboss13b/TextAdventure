// Global player object (later this will no longer be global)
var player = {
	items: [],
	PICKUP: function(item){
		this.items.push(item);
        return "OK";
	},
	DROP: function(item){
		var pos = this.items.indexOf(item);
		if (pos >= 0) {
			this.items.splice(pos, 1);
            return "OK";
		} else {
            return "Don't have it.";
        }
	},
	WALK: function(object){
        console.log('calling walk'); // replace this with the real code
        return "OK";
	},
	JUMP: function(object){
        console.log('calling jump'); // replace this with the real code
        return "OK";
	},
	DUCK: function(object){
        console.log('calling duck'); // replace this with the real code
        return "OK";
	},
	OPEN: function(object){
        console.log('calling open'); // replace this with the real code
        if (object == undefined) {
            return "No object defined, Open what?"
        }
        return "OK";
	},
	CLIMB: function(object){
        console.log('calling climb'); // replace this with the real code
        return "OK";
	},
	ATTACK: function(object){
        console.log('calling attack'); // replace this with the real code
        return "OK";
	},
	BLOCK: function(object){
        console.log('calling block'); // replace this with the real code
        return "OK";
	}
}
