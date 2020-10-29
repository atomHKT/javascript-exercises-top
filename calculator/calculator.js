function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum(arr) {
	return arr.reduce((a, b) => (a + b), 0);
}

function multiply(arr) {
	return arr.reduce((a, b) => (a * b), 1);
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(a) {
	return (a === 0 ? 1 : a * factorial(a - 1))
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}