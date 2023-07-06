// noImplicitAny : any로 추정되는 타입에 any나 다른 타입을 명시하지 않으면 오류 발생
// strictNullChecks : null check를 엄격하게 할 것인가 ( null과 undefined를 모든 타입에서 사용할 수 있게 않도록 할 것인지 )

const el = document.getElementById('status');

if ( el ) {
	el.textContent = 'Ready'; // null check를 통해 확인
}


// Non-null Assertion Operator ( Null이 아닌 어선셜 연산자 )
// → 피연산자가 null이 아니라고 컴파일러에 전달하여 일시적으로 null 제약 조건을 완화시킴
el!.textContent = 'Ready';


// Definite Assignment Assertsions ( 확정 할당 어선셜 )
// → 변수에 무조건 값이 할당되어 있다고 전달
let xVal!: number;
console.log(xVal + xVal); // 값 할당 전이지만 사용할 수 있도록 함 