#### 🎯 ES6 : PROMISES

# 동기 & 비동기 처리
## 🔹 동기식 처리 모델(Synchronous processing model)
- 직렬적으로 태스크를 수행한다.
- 태스크는 순차적으로 샐행되며 어떤 작업이 수행 중이면 다음 작업은 대기하게 된다.

	> *ex*.
	 **동기처리** : 카페에서 직원이 한명만 있을때 주문 받고 음료 만들고를 순차적으로해서 속도가 느릴수 있다. 
	**비동기처리** :  카페에 직원이 한명 이상이고 한쪽은 주문을 받을수도 한쪽은 음료를 받을 수 있어 빠른 속도로 손님을 받을 수가 있다.
- 서버에서 데이터를 가져와서 화면에 표시하는 작업을 수행할 때, 서버에 데이터를 요청하고 데이터가 응답될 때까지 이후 태스크들은 블로킹(blocking,작업중단)된다.

![enter image description here](https://ifh.cc/g/VkyY6T.jpg)
####  동기식으로 동작하는 코드
```js
function  fun1(){
	console.log('fun1');
	fun2()
}

function  fun2(){
	console.log('fun2');
	fun3()
}

function  fun3(){
	console.log('fun3');
}

fun1()
```

> 결과
> 
> ![enter image description here](https://ifh.cc/g/FHm2iB.jpg)


 ## 🔹비동기식 처리 모델(Asynchronous processing model)
 - 병렬적으로 태스크를 수행한다.
 - 태스크가 종료되지 않은 상태라고 해도 대기하지 않고 다음 태스크를 실행한다.
 - 예를 들어 서버에서 데이터를 가져와서 화면에 표시하는 태스크를 수행할 때, 서버에 데이터를 요청한 이후 서버로부터 데이터가 응답될 때까지 대기하지 않고(Non-Blocking)즉시 다음 태스크를 수행한다. 이후 서버로부터 데이터가 응답되면 이벤트가 발생하고 이벤트 핸들러가 데이터를 가지고 수행할 태스크를 계속해 수행한다.

![enter image description here](https://ifh.cc/g/8WtLBJ.jpg)
####  비동기식으로 동작 하는 코드
```js
function  fun1(){
	console.log('fun1');
	fun2()
}

function  fun2(){
	setTimeout(()=>{
	console.log('fun2');
	},0)
w
	fun3()
}

function  fun3(){
	console.log('fun3');
}
  
fun1() 
```

> 결과
> ![enter image description here](https://ifh.cc/g/uiMkhD.jpg)



**실행순서**

> `fun1`이 호출되면 함수 `fun1`은 Call Stack에 쌓인다. 그리고 함수 `func1`은 함수 `func2`을 호출하므로 함수 `func2`가 Call Stack에 쌓이고 setTimeout가 호출된다. 
> **`setTimeout`의 콜백함수는 즉시 실행되지 않고 지정 대기 시간만큼 기다리다가 “tick” 이벤트가 발생하면 태스크 큐로 이동한 후 Call Stack이 비어졌을 때 Call Stack으로 이동되어 실행된다.**
> 
> ![enter image description here](https://ifh.cc/g/vyxH1k.jpg)

###### [참고 사이트: Poiemaweb](https://poiemaweb.com/js-async)

#  Promises
## 🔹 creating Promises
```js
const makePrimise =  new Promise((resolve,reject)=>{
	setTimeout(resolve,3000,"It is works")
	// setTimeout(실행할 일,시간,인자)
})
 
console.log(makePrimise);

setInterval(console.log,  1000, makePrimise)
// 실행할 일, 시간, 인자
```

## 🔹 using Promises
```js
const makePrimise =  new Promise((resolve,reject)=>{
	//setTimeout(resolve,3000,"It is works")
	setTimeout(reject,1000,"You are ugly")
})

makePrimise
	.then(value  =>console.log(value)) // setTimeout의 resolve값을 3초후에 반영해준다.(성공 했을때)
	.catch(err  =>console.log(err)) // reject 때 에러 처리
```

> then이 실행되면 catch는 실행 되지 않는다. 
> (둘중 하나가 실행될때 다른 하나는 실행되지 않는다.)

## 🔹 chaining Promises
```js
const  timeTwo  =  num  => num *  2

makePrimise
.then(timeTwo)
.then(timeTwo)
.then(timeTwo)
.then(timeTwo)
.then(lastNum  => console.log(lastNum)) // 32
.catch(err  => console.log(err))
```
- `then`을 몇개를 하던 간에 **`return`** 만 해주면 된다.

## 🔹 Promise.all()
##### promises함수
```js
const p1 =  new Promise(resolve=>{
	setTimeout(resolve,1000,"Frist");
})

const p2 =  new Promise((resolve,reject)  =>  {
	//setTimeout(resolve, 3000, "Second");
	setTimeout(reject,  3000,  "I hate JS");
})

const p3 =  new Promise(resolve  =>  {
	setTimeout(resolve,  2000,  "Third");
})
```

##### promise.all()
```js
const motherPromise =  Promise.all([p1,p2,p3]);

motherPromise
 .then(values  => console.log(values)) // ["Frist", "Second", "Third"]
 .catch(err  => console.log(err)) // 하나라도 reject한다면 err를 표기해준다.
```
- 순서에 맞춰 값을 불러온다.
- 모든값을 불러온후에 결과를 보여 준다.
- 모든 값이 resolve되어야 한다.

> [Promise.all MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

## 🔹 Promise.race()
```js
const motherPromise =  Promise.race([p1, p2, p3]);

motherPromise
	.then(values  => console.log(values)) // Third
	.catch(err  => console.log(err))
```

- 하나라도 resolve되거나 reject되면 된다.

## 🔹 .finally()
```js
const pp1 =  new Promise(resolve  =>  {
	setTimeout(reject,1000,  "First")
})
 .then(value  => console.log(value))
 .catch(err  => console.log(`${err}❌`))
 .finally(()=>console.log("Im done"))
 
// First❌
// Im done
```
- 충족되거나 거부되는지 여부에 관계없이 지정된 콜백 함수가 실행된다. `.finally()`에 실행한 함수를 반영해준다.
	(Promise가 처리된 후에 코드가 무조건 한번은 실행되는 것을 제공한다.)

> [Promise.finally MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)

## 🔹 Real world Promises
##### 데이터 불러오기
```js
fetch('http://127.0.0.1:5500/08_PROMISES.html')
 .then(res  => res.text())
 .then(text  => console.log(text))
 .catch(e=>console.log(`❌ ${e}`))
```


## 🔹 Promise allSettled 
```js
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status)));

// expected output:
// "fulfilled"
// "rejected"
```

> [promise.allSettled() mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)

👍🏿 [***my code***](https://github.com/gay0ung/JS_study/blob/master/ES6/08_PROMISES.html)



