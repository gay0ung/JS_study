// #2-5--------------------------------------------------------------
// const sayHi = (name:string, age:number, gender:string):string => {
//  return`Hello ${name}, you are ${age}, you are a ${gender}`
// } 

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
import * as CrytoJS from "crypto-js";
class Block {
  public index: number;
  public hash:string;
  public previousHash: string;
  public data: string;
  public timestamp:number;
  
  // static키워드 사용으로 블로체인 밖에서도 함수사용가능
  static calculateBlockHash = ( 
    index: number,
    previousHash: string,
    data: string,
    timestamp: number
  ): string =>
    CrytoJS.SHA256(index + previousHash + timestamp + data).toString()

  constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number){
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp
  }
}

//#8
const genesisBlock:Block = new Block(0,"202020202020","","HELLO",123456)
let blockchain: Block[] = [genesisBlock]
console.log(blockchain);

// #9
// Block.calculateBlockHash() // 블록체인형식이아니여도 함수를 사용할수 있다.
const getBlockChain = (): Block[] => blockchain
const getLatesBlock = (): Block => blockchain[blockchain.length -1];
const getNewTimeStamp = ():number => Math.round(new Date().getTime() / 1000)




export{}