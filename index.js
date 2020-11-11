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
const posneg = document.querySelector("#posneg");
const percent = document.querySelector("#percent");
const backspace = document.querySelector("#backspace");
const divide = document.querySelector("#divide");
const times = document.querySelector("#times");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const equals = document.querySelector("#equals");
const calcBtn = document.querySelectorAll(".btn");
const inputWindow = document.querySelector("#main-input");
const displayWindow = document.querySelector("#display");

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

function solution() {
	let answer = parseInt(inputWindow.value);
	displayWindow.value = answer;
	inputWindow.value = "";
}

calcBtn.forEach((btn) =>
	btn.addEventListener("click", (e) => {
		e.preventDefault();
		console.log(btn.id);
		if (btn.id != "clear" && btn.id != "backspace" && btn.id != "equals") {
			inputWindow.value += btn.innerHTML;
		}
	})
);

equals.addEventListener("click", solution);

//Assign keycodes to calc buttons
