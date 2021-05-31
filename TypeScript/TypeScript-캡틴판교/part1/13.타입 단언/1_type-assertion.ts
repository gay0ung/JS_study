// 타입 단언
let a;    // a: any
a = 20;   // a: any
a = '20'  // a: any

let b = a             // a:any -> a는 타입이 any 이기 때문에 b: any이다.
let c = a as string   // as키워드와 함께 원하는 타입을 넣으므로서 c: string이 된다.

// DOM API를 조작할때 타입 단언을 사용한다.
const divEl = document.querySelector('div') as HTMLDivElement; // divEl: HTMLDivElement

// HTMLDivElement값은 null일 수도 있다. 
// 이럴때 as HTMLDivElement라고 타입을 단언해준후 사용해주면 된다.
