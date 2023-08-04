// 함수 type도 type과 interface 모두로 선언 가능
type TFn = (x: number) => string
interface IFn {
    (x: number): string
}


// 둘다 추가적인 속성을 넣을 수도 있음
type TFnWithProps = {
    (x: number): string
    prop: string
}

// -> 어디에 쓸까? 함수를 인자로 받는 고계함수, static 사용 시 등 ... 쓰일 수도...  
const fnWithProps = (x: number) => '10';
fnWithProps.prop = 'a';
const fnWithProps2: TFnWithProps = fnWithProps;


// Union Interface는 없다
type Input = { /* ... */ };
type Output = { /* ... */ };  
interface VariableMap {
  [name: string]: Input |  Output;
}  

// 또는  

type NamedVariable = (Input |  Output) & { name: string };
interface VariableMap2 {
  [name: string]: NamedVariable;
}


type TState = {
    first: number;
}
type TStateOrPop = TState | { population : number };

/* 
Error: An interface can only extend an object type or intersection   of object types with statically known members.ts
- 정적인 객체만 확장이 가능하다... ( 유니온 객체는 불가능 )
interface IStateOrPopAndMore extends TStateOrPop {
    more: number;
}
*/

// 가능
type TStateOrPopAndMore = TStateOrPop & {
    more: number;
}