// 1. 함수의 파라미터에 타입을 정의하는 방식
function func(a: number, b: number) {
  return a + b;
};

func(4, 5);

// 2. 함수의 반환 값에 정의 하는 방식
function add(): number{
  return 10
}

// 3. 함수에 타입을 정의 하는 방식 - 가장 기본적인 방식이다.
function func2(a: number, b: number): number {
  return a + b;
};
func2(10, 20, 30, 40);

// 4. 함수의 옵셔널 파라미터- '?'를 추가해주면 된다.
function log(a: string, b?: number) {
  
};
log('hello world');
log('hello ts', 101010);
