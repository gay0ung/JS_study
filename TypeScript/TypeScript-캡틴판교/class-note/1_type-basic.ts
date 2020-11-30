// js 문자열 선언
let str = 'hello';

// TS 문자열 | 숫자 | 배열 선언
let str: string = 'hello';

let num: number = 10;

let arr: Array<number> = [1,2,3] // 배열타입이고 <숫자>만 들어갈수 있다.
let items: number[] = [1, 2, 3]

let arrStr: Array<string> = ['one','two','three', 10] // 배열타입이고 <문자>만 들어갈수 있다.

// 튜플 : 모든 index에 타입이 정해져 있다.
let address: [string, number] = ['gangnam', 10]

// TS 객체
let obj: object = {};

let person: {name: string, age: number} = {
  name: 'gayoung',
  age: 26
}

// w진위값
let show: boolean = true
