function rollDice1(sides: number):number {
    return 0;
} // Statement -> number 

const rollDice2 = function(sides: number):number {
    return 0;
} // expression1 -> (sides: number)=>number

const rollDice3 = (sides: number): number => {
    return 0;
} // expression2 -> (sides: number)=>number


// 재사용 방법
type BinaryFn = (a: number, b: number) => number;
const binAdd: BinaryFn = (a, b) => a + b;
const binSub: BinaryFn = (a, b) => a - b;
const binMul: BinaryFn = (a, b) => a * b;
const binDiv: BinaryFn = (a, b) => a / b;


// 라이브러리를 직접 만들거나 api 요청 메서드를 만드는 등의 상황에 유용함
// checkedFetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>
const checkedFetch: typeof fetch = async( input, init ) => { 
    const response = await fetch(input, init);
    if ( ! response.ok ) {
        throw new Error( "Request Failed: " + response.status );
    }
    return response;
}