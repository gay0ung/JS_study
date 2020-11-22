class Person {
  private name:string; //해당 클래스 안에서만 사용하겠다.
  public age:number; // 대외적으로 사용하겠다.
  readonly log: string // 접근은 가능하나 값은 변경할수 없다.
  
  constructor(name:string,age:number){
    this.name = name;
    this.age = age
  }
}