// 숫자형 이넘
enum numColor {
  Red, 	// 0
  Yellow,     // 1
  Green,	// 2
  Blue	// 3
}

let choiceColor = numColor.Red // 0
// 문자형 이넘
enum strColor {
  Red = "빨간색",
  Yellow = "노란색",
  Green = "초록색",
  Blue = "파란색"
}

let choice = strColor.Red
console.log(choice)

// 이넘 활용 해보기
enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer){
  if(answer === Answer.Yes){
    console.log('정답입니다.');
  } else if(answer === Answer.No){
    console.log('오답입니다.');
  }
}

askQuestion(Answer.Yes)