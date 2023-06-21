// Object
// object = non-primitive

// create by object literal 
const person1 = { name: 'Mark', age: 39 }; // not 'object' type
console.log(typeof person1); // {name: string, age: number} type

// create by Object.create() -> object | null을 인자로 받음 
const person2 = Object.create({ name: 'Mark', age: 39 });


// Array
// 원래 자바스크립트에서 array는 object ...
let list: number[] = [1, 2, 3];
let list2: (number | string)[] = [1, 2, 3, "4"];
// 섞어서 사용하는 순서가 정해져있는 경우 tuple 사용 
let list3: Array<number> = [1, 2, 3] // 사용 x ... 


// tuple
let x: [string, number]; // string, number의 순서로 단 2개의 값을 가져야 함
x = ["hello", 39];
// x = [10, 'hi'];
// x[3] = "world";

const person: [string, number] = ["jiwon", 23];
const [pName, pAge] = person; // 구조분해 가능 


// any
// 무엇이든 들어올 수 있지만 타입 체크가 안 되므로 남발해서는 X! 정확하게 알고 쓰자 ...
// any를 사용하는 경우 = 데이터형이 정해지지 않은 경우
// 그러나 무엇도 하지 못하는 것이 아니라 무엇이든 할 수 있게 됨 
function returnAny(message: any): any {
    console.log(message);
    // return null;
}
const any1 = returnAny("리턴은 아무거나"); // any 
any1.toString(); // 타입 에러가 발생하지 않음

// any의 전파성
let looselyTyped: any = {};
const anyd = looselyTyped.a.b.c.d;

function leakingAny(obj: any) {
    // const a2 = obj.num;
    // 내부에서 누수를 막는 코드가 필요함
    const a2: number = obj.num
    const b2 = a2 + 1; // any + 1 = any ... 
    return b2;
}

const c2 = leakingAny({ num: 0 })
// c2.indexOf("0"); // 잘못된 호출 방지됨


// unknown
// 모르는 변수의 타입을 묘사 → 이 변수가 무엇이든 될 수 있음
declare const maybe: unknown;
// const aNumber: number = maybe;

if ( maybe === true ) {
    // if문 내에서 타입이 한정됨 
    const aBoolean: boolean = maybe;
    // const aString: string = maybe;
}

if ( typeof maybe === 'string' ) {
    const aString: string = maybe;
}
