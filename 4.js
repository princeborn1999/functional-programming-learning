Array.prototype.customMap = function(projectionFunction) {
	var results = [];
	this.forEach(function(itemInArray) {

		// ------------ INSERT CODE HERE! ----------------------------
		// Apply the projectionFunction to each item in the array and add
		// each result to the results array.
		// Note: you can add items to an array with the push() method.
		// ------------ INSERT CODE HERE! ----------------------------
        results.push(projectionFunction(itemInArray))
	});
	return results;
};
const oriArr = [1,2,3]
const projectionFunction  =  item => item+1
const newArr = oriArr.customMap(projectionFunction)
console.log(newArr)
// JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]'
