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