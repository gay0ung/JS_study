/* 타입 호환 - 인터페이스 & 클래스 ----------------------------------- */
interface Developer {
  name: string;
  skill: string;
}

// interface Person {
//   name: string;
// }

class Person {
  name: string;
}

let developer: Developer;
let person: Person;

// 구조적으로 할당은 더 큰애들이 와야 한다.
developer = person; // developer가 skill이라는 데이터를 하나더 가지고 있기 때문에 할당될수 없다.
person = developer

// class
developer = new Person(); // interface와 마찬가지로 오류가 난다.


/* 타입 호환 - 제네릭 --------------------------------------------------- */
let add = function (a: number) {
  // ...
}

let sum = function (a: number, b: number) {
  // ...
}

add = sum; // sum은 2개의 인자를 넘겨주기 때문에 할당이 불가다.
sum = add;

// 제네릭
interface Empty<T> {
  //..
}
let empty1: Empty<string>;
let empty2: Empty<number>;

// 구조가 다르더라도 할당이 된다.
empty1 = empty2;
empty2 = empty1;


interface NotEmpty<T> {
  data: T;
}

let NOTempty1: NotEmpty<string>;
let NOTempty2: NotEmpty<number>;

// 속성이 동일하지만 data:T에 들어가는 
// 타입들이 각각 달라지기때문에 호환되지 않는다.
NOTempty1 = NOTempty2;
NOTempty2 = NOTempty1;