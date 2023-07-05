/*
typescript는 javascript의 상위 집합 → 문법의 오류와는 별개 ( typescript에서는 오류여도 컴파일은 가능 )

→ 모든 js파일은 ts / 모든 ts 파일이 js 파일은 아님

ts 컴파일러는 js 파일에도 유용함 ( 모든 오류를 잡아주진 못하지만 type checker 덕분에 의도하지 않은 오류를 찾아낼 수 있음  )

하지만 의도를 모두 알아챌 수 없으므로 interface를 생성하는 것을 권장함
*/


interface State {
	name: string
	capital: string
}

const states: State[] = [
	{name: "korea", capital:"seoul"},
]


/*
js에서는 오류가 나지 않을 구문도 ts에서는 타입 추론을 하지 못해 오류가 나기도 함 

→ 이상하게 쓸 거면 쓰지 말아라 … 안전하게 써라 !

type system은 runtime 안전성을 최대한으로 보장해주지만 정적 타입의 정확성을 보장하지는 않음
*/

// const a = null + 7; // JS에서는 7이 되지만 오류 발생
// const b = [] + 12; // JS에서는 '12'가 되지만 오류 발생