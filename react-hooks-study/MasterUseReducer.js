import React, { useState, useReducer } from 'react'

// reducer - state를 업데이트 하는 역할 ( 은행 )
// dispatch - state 업데이트를 위한 요구
// action - 요구의 내용 

const ACTION_TYPES = {
    deposit: 'deposit',
    withdraw: 'withdraw',
}

const reducer = (state, action) => {
    if ( action === ACTION_TYPES.deposit ) {
        return state + action.payload;
    } else if ( action === ACTION_TYPES.withdraw ) {
        return state - action.payload;
    } else {
        return state;
    }
};

export default function MasterUseReducer() {

    const [number, setNumber] = useState(0);
    const [money, dispatch] = useReducer(reducer, 0);
    
    return (
        <div>
            <h2>useReducer 은행에 오신 것을 환영합니다</h2>
            <p>잔고: {money}원</p>
            <input 
                type="number"
                value={ number }
                onChange={(e) => setNumber(parseInt(e.target.value))}
                step="1000"
            />

            <button onClick={() => { dispatch({ type: ACTION_TYPES.deposit, payload: number }); }}>예금</button>
            <button onClick={() => { dispatch({ type: ACTION_TYPES.withdraw, payload: number }); }}>출금</button>
        </div>
    )
}
