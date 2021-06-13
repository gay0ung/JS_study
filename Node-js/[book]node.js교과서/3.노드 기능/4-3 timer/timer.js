const timeout = setTimeout(()=>console.log('1.5초후 실행'),1500);
const interval = setInterval(() => console.log('1초마다 실행'),1000);
const timeoutEnd = setTimeout(()=>console.log('실행되지 않는다.'),3000);

setTimeout(()=>{
  clearTimeout(timeoutEnd);
  clearInterval(interval);
},2500);


const immediate = setImmediate(()=>console.log('즉시 실행'));
const immediateEnd = setImmediate(()=>console.log('즉시 실행되지 않는다.'));

clearImmediate(immediateEnd);