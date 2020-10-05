#### 🎯 ES6 : SYMBOL, SET AND MAP
## Symbols
```js
const superBig =  {
	[Symbol("nico")]:  {
		age:  12
	},
	[Symbol("nico")]:  {
		age:  12
	},
	hello:  "bye"
}

console.log(Object.keys(superBig));  // ["hello"] : Symbol값은 나오지 않는다.
console.log(Object.getOwnPropertySymbols(superBig));  // [Symbol(nico), Symbol(nico)]

const s =  Object.getOwnPropertySymbols(superBig)

s.forEach(symbol  => console.log(symbol)) // ② Symbol(nico)
```
> [Symbol mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 
## Sets
```js
const coolSet =  new Set([1,2,3,4,5,6,7,7,7,8]);
```
```js
console.log(coolSet);  // [1,2,3,4,5,6,7,8]

// 객체 내 값의 개수
coolSet.size;

// value추가 하기.
coolSet.add('hi') // [1,2,3,4,5,6,7,8,'hi']

// 특정 value삭제 하기.
coolSet.delete('hi') // [1,2,3,4,5,6,7,8]
 
// Set객체내 모든 값을 지워준다.
coolSet.clear() // {}
```

> [Set mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set)

## WeakSet
```js
const weakSet =  new WeakSet();

const sexy =  {
	im :  true
}
console.log(weakSet.add(sexy));
```
- 약하게 유지되는 객체를 컬렉션에 저장할수 있다.
- value는 객체 형태여야 한다.

> [WeakSet mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)
## Map and Weakmap
```js
const map =  new Map()
```
```js
map.set('key','value')  // {"key" => "value"}

map.has('key') // true

map.get('key')  // value
```

> [Map mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map)

👍🏿 ***my code***

