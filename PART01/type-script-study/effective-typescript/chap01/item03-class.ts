class Square2 {
    constructor( public width: number ) {}
}

class Rectangle2 extends Square2 {
    constructor( public width: number, public height: number ) {
        super(width);
    }
}

// class는 클래스 값이면서도, type으로써도 존재할 수 있음 
type Shape2 = Square2 | Rectangle2

function calculateArea2(shape: Shape) { // shape은 class의 instance
    if ( shape instanceof Rectangle2 ) {
        return shape.width * shape.height;
    } else {
        return shape.width * shape.width; // rectangle을 소거하고 sqaure로 추론됨
    }
}