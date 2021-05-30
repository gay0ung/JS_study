
/*1. 기본 문법 ------------------------------------------------------------------------- */
function logText(text) {
  console.log(text);
  return text;
}
logText(10);
logText(true);
logText('lalalal');

// 제네릭 적용
function logText2<T>(text:T):T {
  console.log(text);
  return text;
}
logText2<string>('lalal');


/*2. 기존 타입 정의 방식과 제네릭의 차이점: 함수 중복 선언의 단점 ----------------------- */
//: 타입만 다르고 로직이 중복되는 단점이 있다.
function logText3(text: string){
  console.log(text);
  text.split('').reverse().join('');
  return text;
}
logText3(222);
logText3('222');
logText3(false);

function logNumber(num: number) {
  console.log(num);
  return num;
}
logNumber(10);
logNumber(30);
logNumber(true);


/*3. 기존 문법과 제네릭의 차이점: 유니온 타입을 이용한 선언 방식의 문제점 ---------------- */
// : input에 대한 값은 해결이 되지만 반환값에 대해서는 여전히 해결을 못하고 있다.
function logText4(text: string | number) {
  console.log(text);
  // text.
  return text;
}
const a = logText4('a');
a.split('')



/*4. 제네릭 장점과 타입 추론에서의 이점 ------------------------------------------------- */
function logText5<T>(text: T): T {
  console.log(text);
  return text;
}
const str = logText5<string>('a'); // 문자열 메소드를 사용할수 있다.
const num = logText5<number>(10); // 숫자 메소드를 사용할수 있다.
const boolean = logText5<boolean>(false); 


/*7. 인터페이스에 제네릭을 선언하는 방법 ------------------------------------------------ */
interface Dropdown {
  value: string;
  selected: boolean;
}

const obj: Dropdown = { value: '10', selected: false};

interface Dropdown2<T> {
  value: T;
  selected: boolean;
}
const obj2: Dropdown2<number> = { value: 10, selected: false };
const obj3: Dropdown2<string> = { value: '11', selected: false };
const obj4: Dropdown2<boolean> = { value: true, selected: false };


/*9. 제네릭의 타입 제한 ----------------------------------------------------------------- */
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  text.forEach((el) => console.log(el))
  
  return text;
};
logTextLength<string>(['hi']);

/*10. 정의된 타입으로 타입을 제한하기 --------------------------------------------------- */
interface LengthType {
  length: number;
}
function logTextLength2<T extends LengthType>(text: T): T {
  console.log(text.length);
  
  return text;
};
logTextLength2<string>('hi');

/*11. keyof로 제네릭의 타입 제한하기 ---------------------------------------------------- */
// keyof 를 이용해 ShoppingItem의 값들만 적용 가능하게 하는 것이다.
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T{
  return itemOption;
};
getShoppingItemOption<string>('hi');
getShoppingItemOption("name");