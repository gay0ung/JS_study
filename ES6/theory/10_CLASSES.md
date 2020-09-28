#### 🎯 ES6 : CLASSES
## Classes
- Class 는 객체를 생성하기 위한 템플릿 이다.
- Class는 데이터와 이를 조작하는 코드를 하나로 추상화 한다.
- JS에서 Class는 프로토타입을 이용 해서 만들어 졌지만 ES5의 Class의미와는 다른 문법과 의미를 가진다.
> **한마디로 정의해**
> *`Class`* 는 함수이다. 함수를 함수 표현식과 함수 선언으로 정의 할수 있듯이
>  class문법도 `class표현식`과 `class선언` 두 가지 방법을 제공한다.

```js
class  User  {
	constructor(name){
		this.username = name
	}
	sayHello(){
		console.log(`Hello, my name is ${this.username}`);
	}
}

const helloUser =  new User("ga young");

helloUser.sayHello();
```
- 클래스를 사용하기 위해서는 **클래스를 먼저 선언**해야 하며, 그렇지 않으면 `ReferenceError`를 반영한다.
[Class mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)
## Extending Classes
```js
```

## super 
```js
```

## this 
```js
```
👍🏿 [***my code***](https://github.com/gay0ung/JS_study/blob/master/ES6/10_CLASSES.html)






