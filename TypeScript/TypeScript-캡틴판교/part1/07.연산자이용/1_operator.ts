/* 유니온타입 ---------------------------------------------------------------------------------------- */
// 타입이 하나 이상일 경우 '|' 를 사용하면 된다.
function logMessage(value: string | number) {
  console.log()
}

logMessage('hello');
logMessage(100);


/* 유니온 타입의 장점

  정해준 타입의 메소드를 사용할수 있다. 예를 들어 타입이 :any이고 string의 메소드를 사용하고 싶다면 
  스스로 메소드를 표기해야 하는데 (오타가 날수 있다)
  유니온 타입을 사용하므로서 string일경우 string관련 메소드를 알려주게 된다.
*/
let gayoung: string | number | boolean;
function logMessage2(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }
}


/* 유니온 타입의 특징

  인터페이스와 같은 구조체를 유니온 타입으로 지정할 경우 공통된 속성만 보여주게 된다. 
  (Developer와 Person의 공통된 특성은 'name'이 있어 someone에 접근 했을때 name만 사용 가능하다)
*/
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  someone.name;
};


/* 인터섹션 타입 ------------------------------------------------------------------------------------- */
// & 사용해 모든 속성에 접근 할수 있다.
let olive: string | number | boolean;
let apple: string & number & boolean;

function askSomeone2(someone: Developer & Person) {
  someone.name;
  someone.age;
  someone.skill;
};


/* 인터섹션과 유니온타입의 차이점 --------------------------------------------------------------------- */
function askSomeone3(someone: Developer | Person) {
};

askSomeone3({ name: '개발자', skill: '프론트엔드' });
askSomeone3({ name: '가영', age: 27 });

// 인터섹션은 Developer와 Person의 속성을 모두 불러줘야 한다.
function askSomeone4(someone: Developer & Person) {
};
askSomeone4({ name: '개발자', skill: '프론트엔드', age:27 });