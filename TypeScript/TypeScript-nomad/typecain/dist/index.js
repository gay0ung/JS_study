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
const CryptoJS = require("crypto-js");
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
Block.calculateBlockHash = (index, previousHash, timestamp, data) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
// # 11
Block.validateStructure = (aBlock) => typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";
//#8
const genesisBlock = new Block(0, "2020202020202", "", "Hello", 123456);
let blockchain = [genesisBlock];
// #9
// Block.calculateBlockHash() // 블록체인형식이아니여도 함수를 사용할수 있다.
const getBlockchain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
// #10
const createNewBlock = (data) => {
    const previousBlock = getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const newTimestamp = getNewTimeStamp();
    const newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
    // #13
    addBlock(newBlock);
    return newBlock;
};
// #12
const getHashforBlock = (aBlock) => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);
// #11
const isBlockValid = (candidateBlock, previousBlock) => {
    if (!Block.validateStructure(candidateBlock)) {
        return false;
    }
    else if (previousBlock.index + 1 !== candidateBlock.index) {
        return false;
    }
    else if (previousBlock.hash !== candidateBlock.previousHash) {
        return false;
    }
    else if (getHashforBlock(candidateBlock) !== candidateBlock.hash) {
        return false;
    }
    else {
        return true;
    }
};
const addBlock = (candidateBlock) => {
    if (isBlockValid(candidateBlock, getLatestBlock())) {
        blockchain.push(candidateBlock);
    }
};
createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");
console.log(blockchain);
//# sourceMappingURL=index.js.map