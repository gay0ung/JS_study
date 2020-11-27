/* 타입가드 를 위한 예제*/
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'Olive', age: 26, skill:'TypeScript'}
}

let Olive = introduce()
console.log(Olive.skill);

if((Olive as Developer).skill) {
  let skill = (Olive as Developer).skill;
  console.log(skill);
} else if ((Olive as Person).age){
  let age = (Olive as Person).age;
  console.log(age);
}

/* 타입 가드를 사용해 보기 */
// 타입가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
  return ( target as Developer).skill !== undefined
}

if(isDeveloper(Olive)){
  Olive.skill
} else {
  Olive.age
}