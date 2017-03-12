function QuestMaster(domContainer, gameScript, currentState = null) {
	this.gameCommands = gameScript.split("$$");
	this.container = domContainer;
	this.state = {
		pointer: 0		// current command
	};

	this._commandParseRegexp = /\$\$(\w+)\s([\d\D]*)/;

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
		this._commandParseRegexp.exec()
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
