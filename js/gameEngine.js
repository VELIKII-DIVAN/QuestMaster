function QuestMaster(domContainer, gameScript, currentState = null) {
	this.gameCommands = gameScript.split("$$");
	this.container = domContainer;
	this.state = {
		pointer: 0;		// current command
	}
	$.extend(true, this.state, currentState);
}

QuestMaster.prototype._init = function() {
}


QuestMaster.prototype.runGame = function() {
	this._init();
	var scriptLen = this.gameCommands.length;
	for(this.state.pointer; this.state.pointer < scriptLen; this.state.pointer) {
		
	}
}