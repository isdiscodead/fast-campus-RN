// type
interface Cylinder {
    radius: number
    height: number
}

// type
type Cylinder2 = {
    radius: number
    height: number
}

class Cylinder3 {
    radius = 1
    height = 1
}

// 함수 = 값
const Cylinder = (radius: number, height: number): Cylinder => ({ radius, height });

function calculateVolume(shape: unknown) {
    // instanceof 뒤에는 값이 와야함
    if ( shape instanceof Cylinder ) {
        // shape.radius;
        // {} 에 radius 속성이 없다는 오류 발생
    }
}


// typeof
interface Person2 {
    first: string
    last: string
}

const notP: Person2 = { first: "ggong", last: "chi" };

type T1 = typeof notP;  // typeof를 type으로: Person2
const c1 = typeof notP; // typeof를 값으로: Object

type T = typeof Cylinder3; // type of Cylinder3 => 인스턴스 타입이 아닌 별개의 값 
type TC = InstanceType<typeof Cylinder3> // Cylinder3


// 속성 접근자
// 값에서는 상관 없지만 type의 속성 값을 가져올 때는 항상 대괄호 사용
const first: Person2["first"] = notP['first'] // = notP.first;
const firstV: Person2['first' | 'last'] = notP['first'] ;

type Tuple = [string, number, Date];
type TupleEl = Tuple[number]; // string | number | Date -> number가 0~2중 하나가 올 수 있으므로 세가지 타입 중 하나임을 뜻함



// 올바른 구조분해
// function email({ person: Person2, subject: string, body: string }) {
function email({ person, subject, body }: {person: Person, subject: string, body: string}) {
    
}