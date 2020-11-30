// function logMessage(value: any){
//   console.log(value);
// }

// logMessage('hello');
// logMessage(100);

function logMessage(value: string | number){
  if(typeof value === 'number'){
    value.toLocaleString();
  } else if(typeof value === 'string'){
    value.toString();
  }

  throw new TypeError('VALUE MUST BE STRING OR NUMBER')
}
//위의 코드와 같이 특정 타입으로 타입의 범위를 좁혀나갈수 있다(타입 가드)
// 하나의 타입이상을 사용할수 있게 하는것.
logMessage('hello');
logMessage(100);

// intersection type
interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: string;
}
// type young = Person & Developer;
// function askSomeone(someone: Developer & Person){
//   someone.age;
//   someone.skill;
//   someone.name;
// }

// 유니온 타입과 인터섹션타입의 차이점
function askSomeone(someone: Developer | Person) {
 //...
}

askSomeone({ name: 'developer', skill:'web'})
askSomeone({name:'young',age:100})
//각 인터페이스들의 속성을 불러올수있다.

function askSomeone(someone: Developer & Person) {
  //...
}

askSomeone({ name: 'developer', skill: 'web', age:100})