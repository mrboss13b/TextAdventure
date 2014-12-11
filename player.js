// Global player object (later this will no longer be global)
var player = {
	name : "",
	location : [],
	items: [],
	PICKUP: function(item){
		this.items.push(item);
        return "OK";
	},
	drop : function(item){
		var pos = this.items.indexOf(item);
		if (pos >= 0) {
			this.items.splice(pos, 1);
            return "OK";
		} else {
            return "Don't have it.";
        }
	},
	walk : function(object){
        console.log('calling walk'); // replace this with the real code
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
