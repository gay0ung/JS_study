/* 1. Pick --------------------------------------------- */
interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 상품 목록 받아오기 API
function fetchProducts():Promise<Product[]> {
  //... 
}

// 클릭했을때 상세 데이터 API
interface ProductDetail {
  id: number;
  name: string;
  price: number;
}
// interface를 하나 생성해 사용해도 되지만 중복되 코드가 길어진다는 단점이 있다.

/* 아래와 같이 Pick키워드를 이용해 타입을 지정해 주면 된다.
```
 : Pick<.., 원하는 데이터 타입들>

```

*/
type shoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {
}


/* 2. Omit타입과 기타 utility타입 목록 ----------------- */
// 특정 타입에서 지정된 속성만 제거한 타입을 정의
type info = Omit < Product,'price' | 'brand' | 'stock' >
function productInfo(info: Omit<Product,'price' | 'brand' | 'stock'>) {
  // ...
}


/* 3. Partial ------------------------------------------ */
type productItem = Partial<Product>
function updateProductItem(productItem: Partial<Product>) {
  // ...
}


/* 4. 유틸리티 타입구현 파셜처럼 구현해보기 ------------- */
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// interface UserPorfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// 4-1 
type UserPorfileUpdate = {
  username?: UserProfile['username'];
  email?: UserProfile['email'];
  profilePhotoUrl?: UserProfile['profilePhotoUrl'];
}

// 4-2 반복문을 이용해 옵셔널로 만들기 : 맵드타입
type UserPorfileUpdate2 = {
  [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
}

// 4-3 keyof로 줄이기
type UserPorfileUpdate2_2 = {
  [p in keyof UserProfile]?: UserProfile[p]
}

// 4-4 제네릭을 이용하기
type Subset<T> = {
  [p in keyof T]?: T[p]
}




