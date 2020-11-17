// 인터페이스인 경우
interface Person {
  name: string;
  age: number;
}

// 타입별칭인 경우
type Person = {
  name: string;
  age: number;
}

let young: Person = {
  name: 'young e',
  age: 26
}

type MyString = string;
let str: MyString = 'hello'

type Todo = {id: string; title: string; done: boolean};
function getTodo(todo: Todo){}

