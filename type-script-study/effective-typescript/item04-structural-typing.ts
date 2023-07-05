interface Vector2D {
    x: number
    y: number
}

function calculateLength(v: Vector2D) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
}

// name 속성이 추가된 별도의 interface
// extends를 활용하여 관계성을 선언해도 동일함
interface NamedVector {
    name: string
    x: number
    y: number
}

const v1: NamedVector = { x: 3, y: 4, name: 'Zee' };
// x: number, y: number를 충족하므로 알아서 계산
calculateLength(v1); // result = 5 

// ======================================================

class C {
    foo: string
    constructor(foo: string) {
        this.foo = foo
    }
    abc() {}
}

const cInstance = new C('intstance of C');
console.log(cInstance instanceof C); // true
console.log(cInstance); // foo만 존재하고 abc()는 __proto__에 ... 

const dVal = { foo: 'object literal' } // abc() 넣기 전엔 type error 발생하지 않음 
// const dVal: C = { foo: 'object literal' } 
console.log(dVal instanceof C); // false