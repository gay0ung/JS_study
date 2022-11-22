// Logical Assignment Operators
// 1. Logical OR Assignment
let name = prompt("what is your name?");

// if(!name) {
//     name = "anonymous";
// }

name ||= "anonymous";

console.log(`Hello ${name}`);