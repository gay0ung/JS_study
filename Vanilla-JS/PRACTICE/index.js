/* THEORY ----------------------------------------------------------------*/
// alert()
console.log('Im Working. Im JS. Im Beautiful. Im worth it');

let a = 221
let b = a - 6
console.log(b);


// to do : finish this -> comments

/* PRACTICE ---------------------------------------------------------------*/
function sayHello(){
    console.log('hello');  
}
sayHello()
console.log("hi!");

function argument(name, age){
    console.log(`Hello! ${name},You have ${age} years of age`);
}
argument('gayoung',26)


const calculator = {
    plus: function(a , b){
        return a + b
    }
}
const plus = calculator.plus(5,5)
console.log(plus);

// JS DOM Functions
console.log(document);
const title = document.querySelector('#title')
console.dir(title);

//Modifying the DOM with JS
title.style.fontSize = "40px"
document.title ="I love vanilla js"

//Events and event handlers
// function handleClick(e){
//     // console.log(e);
//     // console.log("I have been resized");
//     //title.style.color = "#00b894"
// }

// 조건문_ if, else, and, or
// if(10 === 5){
//     console.log("true");
// } else {
//     console.log("false"); 
// }

// const age = prompt("How old are you")

// if(age > 18 && age < 21){
//     console.log('you can drink but you shold not 🥃');
// } else if(age > 21){
//     console.log("go ahead 🤮");  
// } else {console.log("too young 🍼")}

//DOM -if else - FUnction practice
// const BASE_COLOR = "rgb(45, 52, 54)"
// const OTHER_COLOR = "#00cec9"

// function handleClick() {
//     const currentColor = title.style.color;

//     if (currentColor === BASE_COLOR) {
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//     }
// }

// function init(){
//     // init() 는 어플리케이션을 초기화 시킨다.
//     title.style.color = BASE_COLOR
//     title.addEventListener("click", handleClick)
// }
// init()

//DOM -if else - FUnction practice2
const CLICK_CLASS = "clicked"

function handleClick(){
	const hasClass = title.classList.contains(CLICK_CLASS)

	// if (!hasClass){
	// 	title.classList.add(CLICK_CLASS)
	// } else {
	// 	title.classList.remove(CLICK_CLASS)
	// }

	// 위의 함수들을 간단하게 사용할수 있는 함수
	title.classList.toggle(CLICK_CLASS)
}

function init(){
    title.addEventListener("click", handleClick)
}
init()