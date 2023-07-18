// typescript에서는 overiding이 안 된다 !! ... 
// 아래처럼까지는 가능한데 필요도 권장되지도 않는 ...
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any) {
	return a+b;
}

const three = add(1, 2) // Type is number
const twelve = add('1', '2') // Type is string