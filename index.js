//Select all elements to use
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const clear = document.querySelector("#clear");
// const posneg = document.querySelector("#posneg");
// const percent = document.querySelector("#percent");
const backspace = document.querySelector("#backspace");
const divide = document.querySelector("#divide");
const times = document.querySelector("#times");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const equals = document.querySelector("#equals");
const calcBtn = document.querySelectorAll(".btn");
const inputWindow = document.querySelector("#main-input");
const displayWindow = document.querySelector("#display");
const operators = document.querySelectorAll(".signs");
console.log(operators);

window.addEventListener("load", () => {
	inputWindow.value = "";
	displayWindow.value = "";
	inputWindow.focus();
});
clear.addEventListener("click", () => {
	inputWindow.value = "";
	displayWindow.value = "";
});

backspace.addEventListener("click", () => {
	inputWindow.value = inputWindow.value.slice(0, -1);
});

//calculator logic

function add(...args) {
	let values = args.flat(Infinity);
	console.log(values);
	if (values.length == 2 && !values.includes("")) {
		return values.reduce((acc, val) => acc + val);
	}
}
function subtract(...args) {
	let values = args.flat(Infinity);
	console.log(values);
	if (values.length == 2 && !values.includes("")) {
		return values.reduce((acc, val) => acc - val);
	}
}
function division(...args) {
	let values = args.flat(Infinity);
	console.log(values);
	if (values.length == 2 && !values.includes("")) {
		return values.reduce((acc, val) => acc / val);
	}
}
function multiply(...args) {
	let values = args.flat(Infinity);
	console.log(values);
	if (values.length == 2 && !values.includes("")) {
		return values.reduce((acc, val) => acc * val);
	}
}

function solution1(props) {
	let regex = /[\+\-\*\/]/g;
	let inputArray = props.split(regex);
	console.log(inputArray);
	let inputSigns = props.match(regex);
	console.log(inputSigns);
	let floatsArray = inputArray.map((num) => parseFloat(num));
	console.log(floatsArray);
	let answer;
	console.log(inputSigns[0]);
	switch (inputSigns[0]) {
		case "-":
			answer = subtract(floatsArray);
			break;
		case "+":
			answer = add(floatsArray);
			break;
		case "*":
			answer = multiply(floatsArray);
			break;
		case "/":
			answer = division(floatsArray);
			break;
	}
	displayWindow.value = inputWindow.value;
	inputWindow.value = answer;
}

//calculator logic ends here

equals.addEventListener("click", () => {
	let toSolve = inputWindow.value;
	solution1(toSolve);
});
window.addEventListener("keypress", (e) => {
	if (e.key === "Enter") {
		solution1(inputWindow.value);
	} else if (inputWindow.value.match(/\d[+-/*]\d/g)) {
		let toSolve = inputWindow.value;
		solution1(toSolve);
	}
});

calcBtn.forEach((btn) =>
	btn.addEventListener("click", (e) => {
		e.preventDefault();
		// console.log(btn.id);
		if (btn.id != "clear" && btn.id != "backspace" && btn.id != "equals") {
			inputWindow.value += btn.innerHTML;
		}
	})
);

operators.forEach((ops) => {
	ops.addEventListener("click", () => {
		if (inputWindow.value.match(/\d[+-/*]\d/g)) {
			let toSolve = inputWindow.value.slice(0, -1);
			solution1(toSolve);
			inputWindow.value = inputWindow.value + ops.value;
		}
	});
});
//Assign keycodes to calc buttons
