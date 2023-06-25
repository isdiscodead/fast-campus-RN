import React, { useState, useCallback } from 'react'
import Timer from './src/timer';

/* 
컴포넌트 Mount, Update, Unmount시에 실행할 코드 처리를 위함
dependency array의 값에 따라서 2가지 케이스로 결정됨

useEffect에 return 값으로 함수를 넣으면 
해당 컴포넌트가 unmount될 때나 다음 렌더링 시 useEffect가 불리기 전에 실행됨
*/

function masterUseEffect() {

    const [showTimer, setShowTimer] = useState(false);

    return (
        <div>
            <Timer />
            <button onClick={ () => setShowTimer(!showTimer) }>Toggle Timer</button>
        </div>
    )
}

export default masterUseEffect