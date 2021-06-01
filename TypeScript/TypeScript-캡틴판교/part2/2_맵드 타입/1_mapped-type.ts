type Color = 'RED' | 'YELLOW' | 'GREEN' | 'BLUE';

type ColorIdx = { [K in Color]: number };

const index: ColorIdx = {
  RED :1,
  YELLOW :1,
  GREEN :2,
  BLUE:3,
}

// 실용예제 1
type Subset<T> = {
  [K in keyof T]?: T[K];
}

interface Person {
  age: number;
  name: string;
  email: string;
  phone: number;
}

const onlyNum: Subset<Person> = { age: 100, phone: 12345678 };
const onlyStr: Subset<Person> = { name: 'olive', email: 'abc@cd.kr' };
const olive: Subset<Person> = { age: 100, name: 'olive' };
const empty: Subset<Person> = {};