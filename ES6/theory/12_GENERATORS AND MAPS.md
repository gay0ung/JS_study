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
<img src="https://github.com/gay0ung/JS_study/blob/master/ES6/images/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202020-10-15%20114042.jpg" width="80%"></img>

> [Generator mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Generator)

## Proxies
```js
```

## Should you learn proxies or generators?
```js
```

## Conclusions
```js
```


👍🏿 ***my code***



