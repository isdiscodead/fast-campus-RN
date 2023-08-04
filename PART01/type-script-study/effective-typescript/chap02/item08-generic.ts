/*
## 제네릭이란

- **제네릭이란 타입을 마치 함수의 파라미터처럼 사용하는 것**을 의미한다.
- 정적 type 언어는 클래스나 함수를 정의할 때 type을 선언해야 한다.
- Generic은 코드를 작성할 때가 아니라 **코드를 수행될 때(런타임) 타입을 명시한다.**

### 제네릭 사용 이유

- 한 가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는 데 사용된다.
- `재사용성`이 높은 함수와 클래스를 생성할 수 있다.
    - 여러 타입에서 동작이 가능하다. (한 번의 선언으로 다양한 타입에 재사용할 수 있다.)
    - 코드의 가독성이 향상된다.
- generic도 **any처럼 타입을 지정하지 않지만, 타입을 체크**해 컴파일러가 오류를 찾을 수 있다.
*/

// 받는 순서와 제네릭 명시 순서는 관련 없음
function sortBy2<K extends keyof T, T, U extends 'asc' | 'desc'>(vals: T, key: K, order: U) {
	// logics
}

// 위 내용은 아래 코드와 동일함
function sortBy3<K extends keyof T, T>(vals: T, key: K, order: 'asc' | 'desc') {
	// logics
}

// T, K, U를 쓰는 것은 일종의 규약 -> 무슨 글자를 써도 상관은 없지만 팀 컨벤션을 따라서 사용함
/*
- T → Type
- U → 그냥 T 다음이라서 … T1 T2 쓰기도 함
- K → Key
- V → Value
- E → Element
- N  → Number
*/