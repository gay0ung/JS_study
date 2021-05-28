class Person {
  // 타입을 정해 줘야 한다.
  private name: string;
  public age: number;
  readonly log: string; // 읽기만 가능하다.

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let gayoung = new Person('가영', 27);
console.log(gayoung);