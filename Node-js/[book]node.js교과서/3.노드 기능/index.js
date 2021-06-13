// const {odd,even} = require('./var.js');
const {odd,even} = require('./var.js');
const checkNumber = require('./func.js');

//ES2015이후
// import { odd,even } from './var.js';
// import checkOddOrEven from './func.js';

const checkStringOddOrEven = (str)=>{
  return str.length % 2 ? odd : even;
}

console.log(checkNumber(10));
// console.log(checkOddOrEven(10));
console.log(checkStringOddOrEven('hello'));