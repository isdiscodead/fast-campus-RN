// Type = 변수에 할당 가능한 값의 집합 = 범위 
// ex) 모든 숫자 값의 집합 = number
// 가장 작은 집합 = 공집합 = never → 도달하면 안 되는 곳에 할당
type A = 'A';
type B = 'B';


// union type 
type AB = 'A' | 'B';
type AB12 = AB | 12;
let ab12:AB12 = 'A';


type Twelve = 12; // 12 자체가 하나의 타입이 됨
const Twelve_const = 12; // const는 변경되지 않기 때문에 12를 타입으로 가짐
let Twelve_let = 12; // number


declare let abc: AB
const back: AB = abc; // type 오류가 발생하지 않지만 
// js로 컴파일 했을 경우 선언되지 않은 abc를 back에 대입하여 오류 발생 





interface Person { 
    name: string
    birth: Date
}

interface Lifespan {
    birth: Date
    death?: Date
}

// 두 개의 타입의 멤버가 모두 있어야 함
type PersonSpan = Person & Lifespan

// 두 개의 타입 중 하나 이상의 멤버가 있어야 함 
type K = Person | Lifespan 

// keyof는 합/교집합 연산에 대해서 씌웠을 때 de-morgan처럼 동작
type ASDF = keyof(Person & Lifespan) // === (keyof Person) | (keyof Lifespan)
type FDSA = keyof(Person | Lifespan) // === (keyof Person) & (keyof Lifespan)



// 한정자
function getKey<K extends string>(val: any, key: K) {
    // task...
}

getKey({}, 'x'); // 'x'는 string을 extend하므로 사용 가능
getKey({}, Math.random() < 0.5 ? 'a' : 'b' ); // 'a' | 'b' 는 string을 extend하므로 사용 가능
getKey({}, document.title); // title은 string을 extend하므로 사용 가능
// getKey({}, 12); // 12는 string을 extend하지 않으므로 사용 불가능 


interface Point {
    x: number
    y: number
}
type PointKeys = keyof Point // Type is "x" | "y"

// T에 속하는 key 값들의 집합인 타입을 extends하는 K
// 즉 Point를 T로 사용할 경우 K 타입의 매개변수 key로는 'x', 'y'를 가질 수 있음 
function sortBy<K extends keyof T, T>(vals: T[], key: K): T[] {
    // COMPRESS
    vals.sort((a: any, b: any) => (a[key] === b[key] ? 0 : a[key] < b[key] ? -1 : +1 )) // T 배열 
    return vals
}

const pts: Point[] = [
    { x: 1, y: 1 },
    { x: 2, y: 0 },
];

sortBy(pts, 'x'); // 'x' extends 'x' | 'y'
sortBy(pts, 'y'); // 'y' extends 'x' | 'y'
sortBy(pts, Math.random() < 0.5 ? 'x' : 'y' ); // 'x' | 'y' extends 'x' | 'y'
// sortBy(pts, 'z'); // 'z'는 'x' | 'y' TYPE을 확장한 타입이 아님 



// Exclude는 차집합 즉 A - B ; T extends U ? never : T
type Te = Exclude<string | Date, string | number > // Date

type NonZeroNums = Exclude<number, 0> // still just number
const nonZeroNon:NonZeroNums = 0; 