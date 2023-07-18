import React from 'react'

export default function MasterUseCallback() {
    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(true);

    const someFunction = useCallback(() => {
        console.log(`someFunc: number = ${number}`);
        return;
    }, [number]); // 첫 렌더링 시에만 생성 후 memoization

    // useCallback을 사용하지 않으면 매번 number가 변경될 때마다
    // someFunction이 재생성 되어 useEffect가 호출됨 
    useEffect(() => {
        console.log('someFunction이 변경되었습니다');
    }, [someFunction]);

    return (
        <div>
            <input 
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <button onClick={ () => setToggle(!toggle) }>{ toggle.toString() }</button>
            <br />
            <button onClick={someFunction}>Call someFunc</button>
        </div>
    )
}
