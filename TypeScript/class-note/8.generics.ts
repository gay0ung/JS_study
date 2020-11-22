// JavaScript
// function logoText(text){
//   console.log(text);
//   return text
// }

// logoText('hello') // 문자열 hello
// logoText(20) // 숫자 20
// logoText(true) // 불린값 true

// TypeScript
// function logoText<T>(text: T):T {
//   console.log(text);
//   return text
// }

// logoText<string>('hello')

// 함수의 중복 선언
// function logoText(text:string){
//   console.log(text);
//   text.split('').reverse().join(' '); // 문자열이라 함수 사용이 가능하다.
//   return text
// }

// function logoNumber(text: number) {
//   console.log(text);
//   return text
// }

// logoText('a') 
// logoText(10) ;
// logoNumber(10)
// logoText(true)

//  타입을 다르게 받기 위해 중복선언을 하는 경우 유지보수측면에서 효율적이지 못한 다는 단점이 있다.

// 유니온타입을 이용한 선언 방식
// function logoText(text: string | number) {
//   text
//   return text
// }

// const a = logoText('a');
// a.split('')

// 제네릭의 장점
// function logoText<T>(text:T):T {
//   return text
// }

// const str = logoText<string>('abc');

// const num = logoText<number>(10)

// 타입을 추론해 최종값(걸맞는 타입)을 반환해준다

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected:boolean;
// }

// const obj: Dropdown = {value:10, selected:false}

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = {value: 'abc', selected: false}
// const obj: Dropdown<number> = {value: 10, selected: false}