/* 숫자형 이넘 ----------------------------------------------------------------- */
// -> 값을 지정하지않으면 index번호에 따른 값을 부여해준다.
enum Shoes {
  Nike,
  Adidas
}

let myShoes = Shoes.Nike;
console.log(myShoes); // 0

/* 문자형 이넘 ----------------------------------------------------------------- */
enum Shoes2 {
  Nike='nike',
  Adidas='adidas'
};
let myShoes2 = Shoes.Nike;
console.log(myShoes); // nike


/* 예제 ------------------------------------------------------------------------ */
enum Answer {
  Yes = 'yes',
  No = 'no'
}
function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답입니다.')
  }
  if (answer === Answer.No) {
    console.log('오답입니다.')
  }
}
askQuestion(Answer.Yes);
askQuestion('no');