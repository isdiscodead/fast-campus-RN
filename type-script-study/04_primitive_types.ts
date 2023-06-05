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
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let notANumber: number = NaN; // NaN은 숫자의 한 형태 ...? 
let undersocreNum: number = 1_000_000; // 가독성을 위한 표기 방식
