/* 1. 타입추론 기본 ----------------------------------------------- */
let a;

function getB(b = 10) {
  let c = 'hi';
  return b + c;
}

10 + '10' // '1010'


/* 2.인터페이스와 제네릭을 이용한 타입 추론 방식 ------------------- */
interface DropDown<T> {
  value: T;
  title: string;
}

let shoppingItem: DropDown<string> = {
  value: 'lalalal',
  title:'this is shopping items title'
}


/* 3.복잡한 구조에서의 타입 추론 방식 ------------------------------ */
interface DropDown2<T> {
  value: T;
  title: string;
}

// DetailedDropdown에 정한 타입이 DropDown에도 정의 된다.
interface DetailedDropdown<K> extends DropDown<K> {
  description: string;
  tag: K;
}

let shoppingItem2: DetailedDropdown<number> = {
  title: 'lalalal',
  description: 'this is shopping items title',
  tag: 123,
  value: 444
  // 만약 타입을 string으로 바꿀 경우 오류가 생기는데 
  // 현재 tag와 value는 값이 number이기 때문이다.
}


/* 4.Best Common Type 추론 방식 ------------------------------------ */
let arr = [1, 3, 'string', true] // arr: (string | number | boolean)[]
//  유니온 타입으로 타입을 추론한다.