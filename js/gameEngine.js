function QuestMaster(domContainer, gameScript, currentState = null) {
	this.gameCommands = gameScript.split("$$");
	this.container = domContainer;
	this.state = {
		pointer: 0		// current command
	};

// I try regexp, but don't work with unicode
	this._parser = {
		cmd: function(str) {
			var ret = array('','');
			for(var i=0; i < str.length; i++) {
				var char = str[i];
				if(char == ' ' || char == "\n") {
					break;
				}
			}
			if(i < 3) {
				return false;		//bad command
			}
			ret[0] = str.substring(2, i);
			if(i < str.length) {
				ret[1] = str.substring(i + 1);
			}
			return ret;
		}

	};

	$.extend(true, this.state, currentState);
}

this.prototype._personTemplate = {
	name: "",
	size: 1,
	place: ""
};

this.prototype._placeTemplate = {
	name: "",
	menuAlias: []
}

QuestMaster.prototype._initGame = function() {
	var scriptLen = this.gameCommands.length;
	for(var i = 0; i < scriptLen; i += 1) {
		var block = this.gameCommands[i];
		if(block === '') continue;
		var commandArr = this._regexp["cmd"]();
		if(commandArr == null || commandArr === false) {
			// TODO: Maybe should write to some error log
			continue;
		}
		var cmd = commandArr[1];
		var args = commandArr[2];
		switch(cmd) {
			case "comments":
				continue;

				case "place":


		}
	}
	if( this.state.pointer == 0 ) {
		this.state.pointer = i;
	}
}


QuestMaster.prototype.runGame = function() {
	this._initGame();
	var scriptLen = this.gameCommands.length;
	for(this.state.pointer; this.state.pointer < scriptLen; this.state.pointer += 1) {

	}
}
