// interface Person {
//   name: string;
//   age: number;
// }

type Person = {
  name: string;
  age: number;
}

let gayoung: Person = {
  name: '가영',
  age: 30
}

/* interface와 type의 차이점?
** interface
 - interface의 이름만 표시해 준다.
  ```
    interface Person
  ```
 - 확장이 가능하다
 - 가급적 interface를 이용하는 것이 좋다.
 
 ** type
 - 타입의 정보를 구체적으로 표시해 준다.
 ```
  type Person = {
    name: string;
    age: number;
  } 
 ```
*/
type MyString = string;
let str: MyString = 'hello'