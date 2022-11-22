// Logical Assignment Operators
// 1. Logical OR Assignment
// let name = prompt("what is your name?");

// // if(!name) {
// //     name = "anonymous";
// // }

// name ||= "anonymous";

// console.log(`Hello ${name}`);

// 2. Logical AND Assignment
// const user = {
//     username: 'young',
//     password: 1234
// }

// // if (user.password) {
// //     user.password = "[secret]"
// // }

// user.password &&= "[secret]";

// console.log(user);

// 3. Logical NULLISH Assignment
const user = {
    username: 'young',
    password: 1234,
    isAdmin: undefined
}

user.isAdmin ??= true; 

console.log(user);