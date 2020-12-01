"use strict";
// #2-5--------------------------------------------------------------
// const sayHi = (name:string, age:number, gender:string):string => {
//  return`Hello ${name}, you are ${age}, you are a ${gender}`
// } 
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(sayHi("Gayoung", 26, "femal")
// );
// // #6 : interfaces on typescript-------------------------------------
// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }
// const person = {
//   name: 'ga young',
//   age: 26,
//   gender:'female'
// }
// const sayHi = (person: Human): string => {
//    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`
// } 
// console.log(sayHi(person));
// #7 : classes on typescript 1-------------------------------------------
// class Human {
//   public name: string;
//   public age: number;
//   public gender: string;
//   constructor(name: string, age:number, gender:string) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender
//   }
// }
// const olive = new Human("olive", 26, "female")
// const sayHi = (person: Human): string => {
//    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`
// } 
// console.log(sayHi(olive));
// #8,9 : blockchain creating a block---------------------------------------
const CrytoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
// static키워드 사용으로 블로체인 밖에서도 함수사용가능
Block.calculateBlockHash = (index, previousHash, data, timestamp) => CrytoJS.SHA256(index + previousHash + timestamp + data).toString();
//#8
const genesisBlock = new Block(0, "202020202020", "", "HELLO", 123456);
let blockchain = [genesisBlock];
console.log(blockchain);
// #9
// Block.calculateBlockHash() // 블록체인형식이아니여도 함수를 사용할수 있다.
const getBlockChain = () => blockchain;
const getLatesBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
//# sourceMappingURL=index.js.map