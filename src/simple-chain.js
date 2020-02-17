const chainMaker = {
	
	state: [],
	
	getLength() {
		return this.state.length;
	},

	addLink(value) {
    value = value === 'undefined' ? '()' : value;
		this.state.push(value);
		return this;
	},

	removeLink(pos) {
		if (Math.sqrt(pos) && --pos < this.state.length) {
			this.state.splice(pos, 1);
			return this;
    } 
    this.state = [];
		throw new Error();
	},

	reverseChain() {
		this.state.reverse();
		return this;
	},

	finishChain() {

		var result = [];

		this.state.forEach(function(el) {
			result.push('( ' + el + ' )');
		});

		this.state = [];		
    return result.join('~~');
	}
};

module.exports = chainMaker;
