// function sum(a, b) {
//   return a + b;
// }
// const one = sum(10, "20");

// console.log(one);

// js를 ts처럼 사용하기

// @ts-check
// 해당 기능을 추가하면 ts처럼 오류를 보여줄수 있다.
/**
 *
 * @param {number} a
 * @param {number} b
 * @returns
 */
function sum2(a, b) {
  return a + b;
}
sum2(2, 2);
