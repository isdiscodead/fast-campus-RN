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


// never
// 일반적으로 return에서 사용됨 -> 어떠한 형태도 return되지 않고 종료되지도 않음 !! 
// never 타입은 모든 타입의 subtype이지만 never에는 무엇도 할당 불가능
function error(message: string): never {
    throw new Error(message);
}

// never를 return하는 경우에도 never로 추론됨
function fail() {
    return error('failed');
}

// 무한루프 생성 가능
function infiniteLoop():never {
    while ( true ) {

    }
}

let a23: string = 'hello';
if ( typeof a23 !== 'string') {
    // string에서 string을 빼면 아무것도 할당할 수 없는 상태
    a23; // 아무 작업 불가능
}

declare const a24: string | number;
if ( typeof a24 !== 'string' ) {
    a24; // number로 타입이 특정되도록 할 수 있음 
}

//  조건부 타입 -> 잘못된 타입을 넣는 실수를 막는 데 사용됨 
// T가 string이면 { [index: stirng]: any }를 만들어서 보냄, 아니면 never
type Indexable<T> = T extends string ? T & { [index: string]: any } : never;
type ObjectIndexable = Indexable<{}>;


// void
// 값은 없고 type만 있고, return type으로 주로 사용됨 
// 보통 undefined를 더 많이 사용함
function returnVoid(message: string) { // : void를 명시할 경우 무엇도 할 수 없음을 의미 
    console.log(message);
    return; // return 값이 없어도 ok 
    // return undefined; // undefined로 반환은 가능 
}

const r = returnVoid("리턴이 없음"); // r = void type이므로 사용 및 할당 불가능