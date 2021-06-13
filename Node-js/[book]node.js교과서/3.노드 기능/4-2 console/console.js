const string ='abc';
const number = 1;
const boolean = true;

const obj = {
  ouside : {
    inside:{
      key:'value'
    }
  }
};

console.time('전체시간');
console.log(string,number,boolean);
console.error('에러 메세지');

console.table([{name:'young', birth: 1995},{name:'woo',birth:1997}])

console.dir(obj,{colors: false, depth:2})
console.dir(obj,{colors: true, depth:1})

console.time('시간측정');
for(let i = 0; i < 1000; i++){};
console.timeEnd('시간측정');

const b = ()=> console.trace('에러 위치 추적');
const a = () => b();

a();
console.timeEnd('전체시간')