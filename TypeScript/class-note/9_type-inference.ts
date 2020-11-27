/* 타입 추론 기본 1 */

// let a = 10 ;

// function getB(b = 10){
//   let c = 'hi'
//   return b + c
// }

/* 타입 추론 기본 2 */
// interface Dropdown<T>{
//   value: T;
//   title: string;
// }

// let shoppingItem: Dropdown<string> = {
//   value: 'acb',
//   title:'hello'
// }

/* 타입 추론 기본 3 */
interface Dropdown<T>{
  value: T;
  title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag:K
}

let detailedItem: DetailedDropdown<string> = {
  value: 'abc',
  title: 'def',
  description:'ABC',
  tag:'DEF'
}

/* 가장 적절한 타입 - best common type */
let arr = [1,2 , 3, true, 'sdff']

