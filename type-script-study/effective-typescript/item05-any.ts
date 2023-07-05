// any 타입은 타입 안전성을 보장하지 않음
let ageAny: number
// ageAny = '12' -> 할당 불가능

ageAny = '12' as any // ok
ageAny += 1 // ok ... 혼란의 시작, ageAny = "121"

// class나 interface의 멤버를 자동완성 / 추론해주는 기능은 변수를 any로 명시할 경우 동작하지 않음
// any를 사용할 경우 code refactoring 시 오류를 감추게 됨
// type 시스템을 숨기고, 시스템의 신뢰를 떨어뜨림