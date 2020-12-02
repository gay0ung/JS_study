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
import * as CryptoJS from "crypto-js";
class Block {
  // static키워드 사용으로 블로체인 밖에서도 함수사용가능
  static calculateBlockHash = ( 
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString()

  // # 11
  static validateStructure = (aBlock: Block): boolean =>
    typeof aBlock.index === "number" && 
    typeof aBlock.hash === "string" && 
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string"

  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  constructor(
    index: number, 
    hash: string, 
    previousHash: string, 
    data: string, 
    timestamp: number
  ){
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp
  }
}

//#8
const genesisBlock: Block = new Block(0, "2020202020202", "", "Hello", 123456);
let blockchain: Block[] = [genesisBlock];

// #9
// Block.calculateBlockHash() // 블록체인형식이아니여도 함수를 사용할수 있다.
const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

// #10
const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimestamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    newTimestamp,
    data
  );
  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlock.hash,
    data,
    newTimestamp
  );

  // #13
  addBlock(newBlock);
  return newBlock;
};

// #12
const getHashforBlock = (aBlock: Block): string =>
  Block.calculateBlockHash (
    aBlock.index,
    aBlock.previousHash,
    aBlock.timestamp,
    aBlock.data
  );

// #11
const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
  if (!Block.validateStructure(candidateBlock)) {
    return false;
  } else if (previousBlock.index + 1 !== candidateBlock.index) {
    return false;
  } else if (previousBlock.hash !== candidateBlock.previousHash) {
    return false;
  } else if (getHashforBlock(candidateBlock) !== candidateBlock.hash) {
    return false;
  } else {
    return true;
  }
};

const addBlock = (candidateBlock: Block): void => {
  if (isBlockValid(candidateBlock, getLatestBlock())) {
    blockchain.push(candidateBlock);
  }
};


createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");

console.log(blockchain);

export{}