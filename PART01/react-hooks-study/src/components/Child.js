import React, { memo } from 'react'

function Child({ name, age, tellMe }) {

    console.log('👶 자녀도 렌더링이 되었네요');

    return (
        <div style={{ border: '2px solid powderblue', padding: '10px' }}>
            <h3>👶 자녀</h3>
            <p>name: { name.lastName }{ name.firstName }</p>
            <p>age: {age}</p>
            <butto onClick={ tellMe }>냥냥</butto>
        </div>
    )
}

export default memo(Child); // 간단하게 memo()로 감싸서 제공 