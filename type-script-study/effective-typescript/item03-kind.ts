// Interface 기반 변수의 타입 체크를 할 때는 Interface 자체로 사용 불가 
// ( js로 컴파일 시 interface가 없으므로 )

interface Square {
    kind: 'square' // 타입을 명시 
    width: number
}

interface Rectangle {
    kind: 'rectangle'
    height: number
    width: number
}

type Shape = Square | Rectangle

function calculateArea(shape: Shape) {
    if ( shape.kind === 'rectangle' ) {
        return shape.width * shape.height;
    } else {
        return shape.width * shape.width; // rectangle을 소거하고 sqaure로 추론됨
    }
}

calculateArea({
    height: 100,
    width: 100,
    // kind: 'square' -> 오류 발생 
    kind: 'rectangle'
})