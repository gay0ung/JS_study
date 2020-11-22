// ES2015(ES6)

// class는 새로운 인스턴스를 만들어 준다.
class Person {
  // 클래스 로직
  constructor(name, age){
    console.log('생성 되었습니다.');
    this.name = name;
    this.age = age;
  }
}

let young = new Person('young',26);
console.log(young);

let obj = {a:10};
Object.keys(obj)
obj.hasOwnProperty('a')

obj

let user = {name:'young', age:100}

let arr = []