function asNumber(val: number | string): number {
    return val as number; // as는 런타임에 영향을 주지 못하는 타입 연산자
}

// 이 코드는 아래와 같은 js 코드로 컴파일링 된다
function asNumber_js(val: any) {
    return val;
}

// 따라서 아래와 같이 작성해야지 원하는 방식으로 작동하게 된다
function asNumberReal(val: number | string): number {
    return typeof val === 'string' ? Number(val) : val;
}