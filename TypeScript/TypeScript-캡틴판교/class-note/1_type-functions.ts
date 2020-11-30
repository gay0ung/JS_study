// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number,b: number) {
//   return a + b
// }

// sum(2,3);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number{
  return 20;
}

// 함수의 타입을 정의하는 방식
function sum(a: number, b: number): number {
  return a + b
}
sum(20,30);

//파라미터를 제한하는 특성
function func(a:number,b:number): number {
  return a + b;
};

func(10,20,30,40);

// 옵셔널 파라미터
function log(a:string , b?:string){
  return `a:${a}, b:${b}`
}

log('hello world');
log('hello ts', 'abc')
