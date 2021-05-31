interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return {name: 'young', age: 27, skill:'Developer'}
}

let gayoung = introduce();
gayoung.skill;
// skill을 반환 해줬음에도 불구 하고 값에 접근 할수 없다. 
// 유니온 타입으로 타입을 지정 해줬을경우 공통된 속성(교집합)만 접근 가능하기 때문이다.-> name만 접근 가능

// 타입단언을 이용했을때 생기는 단점
// : 가독성이 떨어지게 된다.
if ((gayoung as Developer).skill) {
  let skill = (gayoung as Developer).skill;
  skill;
} else if ((gayoung as Person).age) {
  let age = (gayoung as Person).age;
  age;
}

// 타입가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

isDeveloper(gayoung) ? gayoung.skill : gayoung.age;
// is 키워드를 이용한 타입가드를 통해 
// 타입단언으로 생기는 가독성에 대한 문제점을 해결할수 있다.