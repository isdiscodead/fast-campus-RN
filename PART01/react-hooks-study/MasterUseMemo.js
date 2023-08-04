import React from 'react'

function MasterUseMemo() {
    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);

    // isKorea가 변경될 때에만 country를 변경
    // useMemo()가 아닌 useState()로 객체 정의 시
    // 컴포넌트 리렌더링( 재호출 )시 마다 다른 주소를 사용하므로 객체가 새로 정의됨 
    const location = useMemo(() => {
        return {
            country: isKorea ? '한국' : '외국',
        };
    }, [isKorea]);

    useEffect(() => {
        console.log('useEffect 호출');
        // 뭔가 오래 걸리는 작업이 있을 경우 최적화 필수 ! 
    })

    return (
        <div>
            <h2>하루에 몇 끼 먹어요?</h2>
            <input 
                type="number"
                value={ number }
                onChange={(e) => setNumber(e.target.value)}
            />
            
            <hr />

            <h2>어느 나라에 있어요?</h2>
            <p>나라 : { location.country }</p>
            <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
        </div>
    )
}

export default MasterUseMemo