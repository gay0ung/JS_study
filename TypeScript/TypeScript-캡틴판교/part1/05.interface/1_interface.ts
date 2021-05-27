interface User {
  age: number;
  name: string;
}

/* 1.변수에 인터페이스 활용 ------------------------------*/
let gayoung: User = {
  age: 27,
  name: '가영'
}


/* 2.함수에 인터페이스 활용 ------------------------------*/

function getUser(user: User) {
  console.log(user)
}

getUser(gayoung);


/* 3.함수의 스펙(구조)에 인터페이스를 활용 ----------------*/
interface SumFunction {
  (a: number, b: number): number;
}


let sum: SumFunction;
sum = (a: number, b: number): number => {
  return a + b
}


/* 4.인덱싱 ----------------------------------------------*/
interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];
arr[0] = '10'; 


/* 5.딕셔너리 패턴 ----------------------------------------*/
interface StringRegexDictionary {
  [key: string]: RegExp
}

let obj: StringRegexDictionary = {
  // something: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

// obj['cssFile'] = 'a'; //'string' 형식은 'RegExp' 형식에 할당할 수 없습니다.

Object.keys(obj).forEach((value) => { })


/* 6.인터페이스 확장 --------------------------------------*/
// :중복되는 사항은 extends키워드를 사용해서 추가해준다.
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person{
  language: string;
}

let young: Developer = {
  language: 'typescript',
  name: 'agyoung',
  age: 27
}