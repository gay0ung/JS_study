// 인터페이스
interface Developer {
  name: string;
  skill: string
}

interface Person {
  name: string
}

let developer: Developer;

developer: Person; // 오른쪽의 변수의 타입이 왼쪽 타입보다 구조적으로 작을경우에는 호환할수 없다.(부분집합인경우)