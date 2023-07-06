import React, { useCallback, useMemo, useState } from 'react'
import Child from './src/components/Child';

function Optimization() {
    const [parentAge, setParentAge] = useState(20);
    const [childAge, setChildAge] = useState(0);

    const incrementParentAge = () => {
        setParentAge(parentAge + 1);
    }

    const incrementChildAge = () => {
        setChildAge(childAge + 1);
    }

    // 객체를 prop으로 보내면 내용이 바뀌지 않아도 상위 컴포넌트에서 객체가 재생성되어 
    // prop이 변경된 것으로 간주되고, child 컴포넌트도 리렌더링 됨
    // 따라서 object 자체를 useMemo()로 memoization해야 함 
    const childName = useMemo(() => {
       return {
            lastNmae: "이",
            firstName: "꽁치",
       };
    }, []); // 최초 1회만 초기화하므로 빈 의존성 배열


    // 함수도 객체의 일종이므로 동일하게 동작함 !! 
    const tellMe = useCallback(() => {
        console.log("꽁치는 바보야");
    }, []);

    console.log('👪 부모 컴포넌트가 렌더링이 되었어요');

    return (
        <div style={{ border: '2px solid gray', padding: '10px' }}>
            <h1>👪 부모</h1>
            <p>age: { parentAge }</p>
            <button onClick={ incrementParentAge }>부모 나이 증가</button>
            <button onClick={ incrementChildAge }>자녀 나이 증가</button>
            <Child name={ childName } age={ 5 } tellMe={ tellMe }/>
        </div>
    )
}

export default Optimization