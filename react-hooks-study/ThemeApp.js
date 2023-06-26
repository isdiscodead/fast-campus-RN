import React, { useState } from 'react'
import { ThemeContext } from './src/context/ThemeContext';

export const ThemeApp = () => {

    const [isDark, setIsDark] = useState(false);

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            <Page />
        </ThemeContext.Provider>
    )
}
