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

>[Class mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)
## Extending Classes
### this ?
```js
sayHello()  {
	console.log(`Hello, my name is ${this.username}`);
	console.log(this);
}
```
- this 는 `User {username: "ga young"}`를 가르킨다.

### constructor 내용 바꾸기
```js
class  User  {
	constructor(name,lastName,  email,  password)  {
		this.username = name;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
	}
	sayHello(){
		console.log(`Hello, my name is ${this.username}`)
	}
	getProfile()  {
		console.log(`${this.username}  ${this.lastName}  ${this.email}  ${this.password}`);
	}
	updatePassword(newPassword,  currentPassword)  {
		return currentPassword ===  this.password
			?  this.password = newPassword
			: console.log("Can't change password!");
	}
}

const createUser =  new User("Ga young","lee","young@com","1234");

createUser.getProfile(); 
// User {username: "Ga young", lastName: "lee", email: "young@com", password: "1234"}

createUser.updatePassword("hello","1234");  // hello
console.log(createUser.password); // "1234"
```
### `extends` : 똑같이 복사해서 사용하기 
>관리자만이 할수 있는 기능 
>(User의 일부를 변경하고 싶거나 전부 변경하고 싶을때)
```js
class  Admin  extends  User  {
	deleteWebsite(){
		console.log("Deleting the whole website...");
	}
}

const createAdmin =  new Admin("Ga young",  "lee",  "young@com",  "1234");

createAdmin.deleteWebsite();
console.log(createAdmin.email);//young@com
```

## super 
##### 오류가 난다
```js
class  Admin  extends  User  {
	constructor(superAdmin){
		this.superAdmin = superAdmin
	}
	deleteWebsite()  {
		console.log("Deleting the whole website...");
	}
}
const createAdmin =  new Admin("Ga young",  "lee",  "young@com",  "1234",  true);

createAdmin.deleteWebsite();
console.log(createAdmin.email);
```
<img src="https://github.com/gay0ung/JS_study/blob/master/ES6/images/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202020-10-16%20142918.jpg">

> `constructor`을 새로 정의 해줘서 기존의 `construcor`을 잃어버렸기 때문

#### ◼ super을 이용해 기존의 construcor을 복사해온후 admin에서 새로운 construcor을 만들수 있다.
##### User
```js
class  User  {
	constructor({  username,lastName,email,password})  {
		this.username = username
		this.lastName = lastName
		this.email = email
		this.password = password
	}
}
const createUser =  new User({
	username:  "Ga young",
	lastName:  "lee",
	email:  "young@com",
	password:  "1234"
});  
```
##### Admin
```js
class  Admin  extends  User  {
	constructor({  username,  lastName,  email,  password,superAdmin,isActive}){
	super({ username, lastName, email, password});  // User을 불러온다.

	this.superAdmin = superAdmin
	this.isActive = isActive
	}
}
const admin =  new Admin({
	username:  "Ga young",
	lastName:  "lee",
	email:  "young@com",
	password:  "1234",
	superAdmin:true,
	isActive:true
})
```



## this 
#### 예시
######  html
```html
<div>
	<h2>Count One</h2>
	<span  id="count"></span>
	<button  id="add">+</button>
	<button  id="minus">-</button>
</div>

<div>
	<h2>Count Two</h2>
	<span  id="count2"></span>
	<button  id="add2">+</button>
	<button  id="minus2">-</button>
</div>
```
##### js
```js
class  Counter  {
	constructor({  initialNumber  =  0,  counterId,  plusId,  minusId  })  {
		this.count = initialNumber;
		this.counter = document.getElementById(counterId);
		this.counter.innerText = initialNumber;
		this.plusBtn = document.getElementById(plusId);
		this.minusBtn = document.getElementById(minusId);
		this.addEventListener()
	}

	addEventListener()  {
		this.plusBtn.addEventListener('click',  this.increase)
		this.minusBtn.addEventListener('click',  this.decrease)
	}
  
	increase = () => {
		++this.count
		this.repaintCount()
	}
	decrease = () => {
		--this.count
		this.repaintCount()
	}
	repaintCount()  {
		this.counter.innerText =  this.count
	}
}

new Counter({ counterId:  "count", plusId:  "add", minusId:  "minus"  })
new Counter({ counterId:  "count2", plusId:  "add2", minusId:  "minus2", initialNumber:  666  })
```
> **`function increase()` ,`function decrease()` 를 일반함수 로 사용했을때 *this.repaintCount*는 실행되지 않는다 이유는?**
>  일반함수 일때 this를 찍어보면 해당 돔인 `<button></button>` 을 가르키므로 실행되지 않는다. 
>  
>  **해결방법은?** 
>  화살표 함수를 사용하면 `class`를 가르키게 된다.


👍🏿 [***my code***](https://github.com/gay0ung/JS_study/blob/master/ES6/10_CLASSES.html)






