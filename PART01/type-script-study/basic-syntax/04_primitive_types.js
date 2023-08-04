"use strict";
// Primitive Types
// 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 타입 
// 이러한 프리미티브 형에서 내장 함수를 사용 가능한 것은 자바스크립트의 처리 방식 덕분! 
// boolean, number, string, symbol, null, undefined 
let name2 = "mark";
name2.toString();
// boolean
let isDone = false;
isDone = true;
console.log(typeof isDone); // 'boolean'
let isOk = true;
// let isNotOk: boolean = new Boolean(true); 
// number 
let age = 23;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
let notANumber = NaN; // NaN은 숫자의 한 형태 ...? 
let undersocreNum = 1000000; // 가독성을 위한 표기 방식
// string
// 텍스트 형식을 참조하기 위해 따옴표 사용한 형식
let myName = "Jiwon";
myName = 'ggongchi';
// Template String
// 행에 걸쳐있거나 표현식을 넣을 수 있는 문자열 -> 백틱 ` 사용 
let sentence = `Hello, my name is ${myName}.

I'll be ${age + 1} years old next month.`;
console.log(sentence);
