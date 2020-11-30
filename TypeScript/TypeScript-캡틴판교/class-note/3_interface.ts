interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
let young: User = {
  age: 26,
  name: 'young'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
  
}
 // 인터페이스를 받은 함수는 해당 인터페이스 형식만 따르겠다고 정해준것.
const ye = {
  name: 'young e',
  age: 400
}
getUser(ye)


// 함수 구조를 정의하는 인터페이스
interface SumFunction {
  (a:number, b:number):number;
}

let sum: SumFunction;

sum = function(a: number, b:number):number{
  return a + b
}

// 인덱싱 방식을 정의하는 인터페이스
interface StringArray  {
  [index: number]: string
}

let arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10 // 'a'

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string] :RegExp
  //sth         : /abc/
}
let obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\$js/,
}

// obj['cssFile'] = 'a'

// 인터페이스 확장
interface Person {
  name: string;
  age:number;
}

// 중복되는 속성을 상속받아 사용할수 있다.
interface Developer extends Person {
  language: string;
}

let youngE: Developer = {
  language:'ts',
  age:10,
  name:'young'
}