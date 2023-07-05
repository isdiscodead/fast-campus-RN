let a = "Mark";
// typescript에서는 js와 달리 문자열 let -> 숫자 let으로 변경 불가능 ( 임의의 타입이 지정되었으므로 ) 
// a = 39;
a = "Steve";

let b; // any 
b = 3;
b = "Call";

let c: string; // string으로 지정
c = "Mark";
// c = 39;

let d: number; // number로 지정 
// d = "Mark";
d = 39;


function hello(b: number) {
    console.log(b);
}

// hello('Mark');
hello(3); // 숫자만 인자로 사용 가능