import React, { useEffect } from 'react'

function Timer() {
    
    // 최초 1회 실행됨
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("타이머 돌아가는 중 ... ");
        }, 1000); // 1초에 한 번씩 실행됨

        // unmount시에 타이머 정리 
        return () => {
            clearInterval(timer);
            console.log("타이머가 종료되었습니다.");
        };
    }, []);


    return (
        <div>
            <span>타이머를 시작합니다. 콘솔을 보세요!</span>
        </div>
    )
}

export default Timer