console.log ('Im Working. Im JS. Im Beautiful. Im worth it');
/* 1-6 변수-------------------------------------------------------------- */
// const a = 221;
// let b = a - 5;
// console.log(b, a);

//1.Create 생성
//2.Intialize 초기화
//3.Use 사용

/* 1-7 var const let ----------------------------------------------------- */
// const --> constant (절대변하지 않은 변수)
// let --> 변수가 바뀌는걸 허용
// var  --> varible (변수를 바꿀수 있다/ 시초에 있던것.)

/* 1-8 Data type on JS ---------------------------------------------------- */
/* String
const what = "Gayoung";
console.log(what);
*/

/* Booleat : true:0 / false:1
// text가 아니니 "" 안써도 된다.
const wat = true
*/

/* Number
const num = 666;
*/

/* Float : 소수점이 있는 숫자
const float = 55.1;
*/

/* 1-9 Organic Data with Array: 배열  */
// Array: 리스트 같이 저장
// Object: 
// JS는 'camelCase' 로 사용해야 한다.

/*
const monday ="Mon";
const tue ="Tue";
const wed ="Wed";
const thu ="Thu";
const fir ="Fri";

console.log(monday , tue, wed, thu, fir);
*/

/* 
const daysOfWeek= ['monday' , 'tue', 'wed', 'thu', 'fir', 'Sat', 'Sun'];
console.log(daysOfWeek);
*/

/* 1-10 Organic Data with Objec: 객체 --------------------------------------- */
/*
const gayoungInfo = {
    name: "gayoung",
    age: 26,
    gender: "Female",
    home: "JeonJu",
    favMovies: ["Along the gods", "LOTR", "Oldboy"],
    favFood: [
        {
            name:"Kimchi", 
            fatty:false
        },
        {
            name:"Cheese burger", 
            fatty: true   
        }
    ]
}

console.log(gayoungInfo.gender);

gayoungInfo.gender = "Male"
console.log(gayoungInfo.gender);

console.log(gayoungInfo);
*/

/* 2-1 function--------------------------------------------------------------- */
// build-in Function--> 내장함수

/*
function sayHello(name, age){
    console.log("hello! ",name, " you have ", age ,"years of age " );
    
}

sayHello("gayoung", 15);
console.log('Hi!');

argumetn :인자 (변수같은것이다.)
*/

/* more Function --- */
/*
function sayHello(name, age){
    // + 기호 사용.
    // console.log("hello!"+ name + "you are " + age + " years old" );
    // backtick 사용
    return `hello! ${ name } you are ${ age } years old `;
    
}

const greetGayoung = sayHello("gayoung", 15);
console.log(greetGayoung);

const calculator = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    divison: function(a, b){
        return a / b;
    },
    multiply: function(a, b){
        return a * b;
    },
    power: function(a, b){
        return a ** b;
    }
    
}
const plus = calculator.plus(5, 5)
const minus = calculator.minus(5, 2)
const divison = calculator.divison(6, 2)
const multiply = calculator.multiply(5, 5)
const power = calculator.power(2, 3)

console.log(plus,minus,divison,multiply, power);
*/

/* JS DOM Functions */
// const title = document.querySelector("#title")

// title.innerHTML = "Hi! From JS"
// title.style.color = "green"
// document.title = "I own you know"
//console.dir(title);

/* 2-4 Events and Event Handlers------------------------------------------------ */
// what is Event --> 웹사이트에서 작동하는 모든것들.

// function handleClick(event){
//    // console.log("I've been resized");
//     title.style.color = "gold"
// }
// title.addEventListener("click",handleClick)

/* 2-5 조건문:if, else, and, or-------------------------------------------------- */
/*
if(10 === 5){
    console.log("right");
    
} else {
    console.log('wrong');
    
}
*/

//피연산자
// && (and) : 양쪽다 'true'값이어야 한다. ture && true = ture
/*
if ( 10 > 5 && "gayoung" === "gayoung" ) {
    console.log("yes1");
} else {
    console.log("no1");  
}
*/

// || (or) : 둘중 한곳만 'true'값이어도 된다.true || flase = true
/*
if ( 10 > 11 || "gayoung" === "gayoung" ) {
    console.log("yes2");
} else {
    console.log("no2");  
}
*/

// 예제문 
/*
const age = prompt("How old are you")

if(age >= 18 && age <= 21) {
    console.log("you can drink but you should not");
    
} else if( age > 21 ) {
    console.log("go ahead ");  
}else {
    console.log("too young"); 
}
*/

/* 2-6 if else_ #practice_1 ------------------------------------------------------*/
/*
const title = document.querySelector('#title')

const BASE_COLOR = "white"
const OTHER_COLOR = "#7f8c8d"

function handleClick(){
    const currentColor = title.style.color;
    
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR
    title.addEventListener('click', handleClick )
    //title.addEventListener('mouseenter', handleClick )
}

init()

function handleOffline(){
    console.log('Bye');
}
function handleOnline(){
    console.log("welcome back");
    
}
window.addEventListener("offline", handleOffline)
window.addEventListener("online", handleOnline)
*/

/* 2-7 if else_ #practice_2 ------------------------------------------------------*/
const title = document.querySelector('#title')
const CLICKED_CLASS = "clicked";

function handleClick(){
    // const hasClass = title.classList.contains(CLICKED_CLASS)

    // if(hasClass) {
    //     title.classList.remove(CLICKED_CLASS)
    // } else {
    //     title.classList.add(CLICKED_CLASS)
    // }

    // 위에 했던것을 더 간편하게 해주는 기능.
    title.classList.toggle(CLICKED_CLASS)
}

function init(){
    title.addEventListener('click', handleClick )
}

init()
/* 3-1 Making a JS Clock_1  ------------------------------------------------------*/
/* 3-2 Making a JS Clock_2  ------------------------------------------------------*/
