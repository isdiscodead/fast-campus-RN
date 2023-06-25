import React, { useState } from 'react'
import { ThemeContext } from './context/ThemeContext';

export const ThemeApp = () => {

    const [isDark, setIsDark] = useState(false);

    return (
        <div>ThemeApp</div>
    )
}
