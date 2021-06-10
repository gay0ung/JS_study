interface Hero {
  name: string;
  skill: string;
}

// const capt: Hero = {
//   name: 'capt',
//   skill: 'shield',
// };

// const capt: Hero = {};

// 타입 단언을 했을때 값을 넣지 않아도 오류가 나지 않는다
// 타입스크립트의 장점이 없어지는 것이다.
// 타입을 정해주는것은 무조건 그값을 들어가게 하려고 사용하는것인데 해당 장점을 이용하지 못하는 것이다.
// const capt = {} as Hero;

// 타입 어썬셜
const a: string | null;
a!;
