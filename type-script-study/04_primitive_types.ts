// Primitive Types
// 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 타입 
// 이러한 프리미티브 형에서 내장 함수를 사용 가능한 것은 자바스크립트의 처리 방식 덕분! 
// boolean, number, string, symbol, null, undefined 
let name2 = "mark";
name2.toString();


// boolean
let isDone: boolean = false;
isDone = true;
console.log(typeof isDone); // 'boolean'

let isOk: Boolean = true;
// let isNotOk: boolean = new Boolean(true); 


// number 
let age: number = 23;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let notANumber: number = NaN; // NaN은 숫자의 한 형태 ...? 
let undersocreNum: number = 1_000_000; // 가독성을 위한 표기 방식


// string
// 텍스트 형식을 참조하기 위해 따옴표 사용한 형식
let myName: string = "Jiwon";
myName = 'ggongchi';


// Template String
// 행에 걸쳐있거나 표현식을 넣을 수 있는 문자열 -> 백틱 ` 사용 
let sentence: string = `Hello, my name is ${myName}.

I'll be ${age+1} years old next month.`;

console.log(sentence);


// Symbol 
// new Symbol을 사용할 수 없고, Symbol()을 사용해 symbol 타입을 생성
// Symbol 사용을 위해서는 lib에 ES2015와 DOM 추가 필요
// 프리미티브 타입의 값을 넣어, 고유하고 수정 불가능한 값을 만들어서 접근 제어용으로 사용함
console.log(Symbol('foo') === Symbol('foo')); // false
const sym = Symbol(); // 값을 넣지 않아도 생성됨 
const obj = {
    [sym]: "value",
};
obj[sym];


// null & undefined
// null은 null만, undefined는 undefined만 값으로 가짐
// void와 마찬가지로 그 자체로는 그다지 유용하지 않음
// 둘다 모든 타입의 subtype으로 사용될 수 있음 
// 컴파일 옵션에서 --strictNullChecks를 사용하면 하위 타입으로 사용되지 않음
// 할당 가능하도록 하려면 union type 이용 ! 
let u: undefined = undefined; // 아예 준비되지 않은 값
let n: null = null; // 준비가 덜 된 값
let v: void = undefined;

console.log(typeof n); // null이 아닌 object 
console.log(typeof u); // undefined

// let myName: string = null;
let union: string | null | undefined = 'str';