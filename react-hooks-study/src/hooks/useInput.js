import React, { useState } from 'react'

export default function useInput( initialValue, submitAction ) {
    const [inputValue, setInputValue] = useState(initialValue);
    
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        submitAction(inputValue);
        setInputValue('');
    }

    return [inputValue, handleChange, handleSubmit];
}
