#### 🎯 ES6 : SDF
## Generators 
#### 문법
```js
function* gen(){
 yield 1;
 yield 2;
 yield 3;
}

let g = gen(); // "Generator { }" 
```
- `yield` :  return과 비슷하다.
#### 메서드

```
g.next()
```
- yield 표현을 통해 yield 된 값을 반환한다.
```
g.return()
```
- 주어진 값을 반환하고 생성기를 종료
```
g.throw()
```
- 생성기로 에러를 throw한다.

#### 예시
```js
const friends = ['one','two','three','four','five','six'];
function*  friendTeller(){
	for(const friend of friends){
	yield friend;
	}
}
const friendLooper =  friendTeller();
```
##### 결과
<img src="https://github.com/gay0ung/JS_study/blob/master/ES6/images/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202020-10-15%20114042.jpg" ></img>

> [Generator mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Generator)

## Proxies
#### Proxy?
- `fillter()` 라고 생각 하면 된다.
- 기본적인 동작(속성 접근, 할당, 순회, 열거, 함수 호출 등..)의 새로운 행동을 정의할 때 사용한다.

#### 문법
``` js
new Proxy(target,handler);
```
- **target** :  proxy와 함께 싸여진 target 객체
- **handler** : 프로퍼티들이 `function`인 객체이다. 동작이 수행될 때 `handler`는 proxy의 행동을 정의한다.
#### 예시
```js
const userObj =  {
	username:'young',
	age:26,
	password:1234
}

const userFilter =  {
	get:(target,prop,receiver)=>  {
		if(prop ===  "passwer") `${"*".repeat(5)}`;
	},
	set:()=>{
		console.log("Somebody wrote something");
	},
	deletePropperty: (target,prop)=>{
		if(prop ===  "password"){
			return;
		}  else  {
			target[prop] =  "DELETED"
		}
	}
}

const filteredUser =  new Proxy(userObj, userFilter)
```
- `handler.get()` : 속성값 가져온다.
- `handler.set()` : 속성값 설정.
-  `handler.deletePropperty()` : `delete`를 사용한다.
##### 결과
<img src="https://github.com/gay0ung/JS_study/blob/master/ES6/images/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202020-10-15%20120852.jpg"></img>
> [Proxy mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
> [proxy _ handler mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
> 

👍🏿 [***my code***](https://github.com/gay0ung/JS_study/blob/master/ES6/12_GENERATORS_AND_MAPS.html)



