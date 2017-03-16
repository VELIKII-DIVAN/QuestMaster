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
		},

		lines: function (str) {
			return str.split("\n");
		},

		key_val: function(str) {
			var ret = array('','');
			// ignore begin white spaces
			for(var beginKey = 0; beginKey < str.length; i++) {
				var char = str[beginKey];
				if(char != ' ' && char != "\n") {
					break;
				}
			}
			for(var beginVal = beginKey + 1; i < str.length; i++) {
				char = str[beginVal];
				if(char == ' ' && char == "\n") {
					break;
				}
			}
			beginVal += 1;		// first value symlol after whitespace

			if(beginKey < str.length) {
				return ret;
			}
			ret[0] = str.substring(beginKey, beginVal - 1);

			if(beginVal < str.length) {
				return ret;
			}
			ret[1] = str.substring(beginVal);
			return ret;
		}

	};

	$.extend(true, this.state, currentState);
}

this.prototype._findFirstSubstring = function (str, find1) {
	var first = Number.MAX_SAFE_INTEGER;
	for (var i = 1; i < arguments.length; 1++) {
		var index = str.indexOf(arguments[i]);
		if( index > 0 && index < ret) {
			first = index;
		}
	}
	if(ret != Number.MAX_SAFE_INTEGER) {
		return ret;
	}
	return -1;
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
					var lines = this._parset("lines");
					var place = {
						name: lines[0]
					}
					for (var i = 0; i < lines.length; i++) {
						var prop = this._parser["key_val"](lines[i]);
						if(prop == false) {
							continue
						}
						switch (prop[0]) {
							case "entry":
							  place["entry"] = prop[1];
								break;
							default:
								break;
						}
					}
					place = $.extend(this._placeTemplate, place)
					this.state.place[place["name"]] = place;
					break;

// ЗАКОНЧИЛ ТУТ
				case "person":
					var lines = this._parset("lines");
					var person = {
						name: lines[0]
					}
					for (var i = 0; i < lines.length; i++) {
						var prop = this._parser["key_val"](lines[i]);
						if(prop == false) {
							continue
						}
						switch (prop[0]) {
							case "entry":
								place["entry"] = prop[1];
								break;
							default:
								break;
						}
					}
					break;

					break;

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
