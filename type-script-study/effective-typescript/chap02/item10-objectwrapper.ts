// 래퍼 타입을 직접 사용하거나 인스턴스를 행성하는 것은 피하기
/*
기본 형들은 객체와 달리 함수를 가지지 않지만 string은 객체처럼 함수를 가지는 것처럼 보임
string을 사용할 때는 String 객체로 string 값을 wrapping하여 함수를 사용하는 것
*/

// Don't do this
const originalCharAt = String.prototype.charAt;
String.prototype.charAt = function ( pos ) {
    console.log(this, typeof this, pos); // object, 3
    return originalCharAt.call(this, pos);
}
console.log( "primitive".charAt(3) );


function getStringLen(foo: String) {
    return foo.length;
}

getStringLen('hello'); // OK  string -> String
getStringLen(new String('hello')); // OK

function isGreeting(phrase: String) { 
    // String -> string (X)
    // return ['hello', 'good day'].includes(phrase); 
}