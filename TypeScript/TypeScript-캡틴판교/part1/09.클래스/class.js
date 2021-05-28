function Person(name, age) {
  this.name = name;
  this.age = age;
}

let young = new Person('가영', 27)

class Person {
  // 클래스 로직
  constructor(name, age){
    console.log('생성 되었습니다');
    this.name = name;
    this.age = age;
  }
}

let gayoung = new Person('가영',27);
console.log(gayoung);

// function 키워드와 class키워드 모두 같은 생성자 함수이다. 문법이 다를 뿐