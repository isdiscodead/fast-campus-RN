import React, { useState, useCallback } from 'react'
import Timer from './src/timer';

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