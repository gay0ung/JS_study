function add(a: number, b:number): number {
  return a + b;
}

let result = add(20, "20");

result.toLocaleString() 
// 특정언어의 표현 방식에 맞게 숫자를 표기하는 API