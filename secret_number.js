//'use strict';
module.exports = function() {
	var secretNumber = 0;
	return function() {
		if(secretNumber === 0) {
			secretNumber = Math.random() * (1000000 - 0) + 0;
		}
		return secretNumber;
	};
};




