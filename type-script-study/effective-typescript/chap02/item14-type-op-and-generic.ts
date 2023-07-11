// type 반복은 code 중복만큼 문제를 일으킴
interface IPerson {
    firstName: string
    middleName: string
    lastName: string   
}

// IPerson과 구조적 type으로도 완전히 다른 interface 
interface IPersonWithBirthDate {
    firstName: string
    lastName: string   
    birth: Date
}

// extends 활용
interface IPersonWithBirthDateExtended extends IPerson { 
    birth: Date
}

// type 중복 줄이기 전 코드 1
interface Options {}

function get(url: string, opts: Options): Promise<Response> {
    return Promise.resolve(new Response());
}
function post(url: string, opts: Options): Promise<Response> {
    return Promise.resolve(new Response());
}

// function typing으로 중복을 줄인 코드
type HTTPFunction = (url: string, opts: Options) => Promise<Response> 
const get2: HTTPFunction = (url, opt) => {
    return Promise.resolve(new Response());
}
const post2: HTTPFunction = (url, opt) => {
    return Promise.resolve(new Response());
}


// type indexing 
interface State {
    userId: string
    pageTitle: string
    recentFiles: string[]
    pageContents: string
}

// 부분적으로 사용해야 할 때 속성이 변경될 경우 같이 바뀔 수 있도록 하므로
// 유지보수 방면에서 좋은 방법이 됨 
type TopNavState = {
    /*
    // 하지만 여전히 직접 중복되는 코드를 작성하고 있음
    userId: State["userId"]
    pageTitle: State["pageTitle"]
    recentFiles: State["recentFiles"]
    */
    // 아래처럼 매핑된 형식으로 변경하거나 Pick 사용
    [k in 'userId' | 'pageTitle' | 'recentFiles']: State[k]
}


// update용 옵셔널 타입 만들기
interface Options {
    width: number
    height: number
    color: string
    label: string
}

/*
interface OptionsUpdate {
    width?: number
    height?: number
    color?: string
    label?: string
}
*/

// 혹은 Partial<Options> 사용
type OptionsUpdate = { [k in keyof Options]?: Options[k] };



// 만들어진 객체 기반의 type 만들기
const INIT_OPTIONS = {
    width: 640,
    height: 480,
    color: '#00ff00',
    label: "VGA",
}

type InitOptions = typeof INIT_OPTIONS;