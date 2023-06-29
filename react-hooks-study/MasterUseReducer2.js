import React, { useState, useReducer } from 'react'
import Student from './src/components/Student';

const reducer = (state, action) => {
    switch ( action.type ) {
        case 'add-student':
            const name = action.payload.name;
            const newStudent = {
                id: Date.now(),
                name,
                isHere: false,
            }
            // 기존과 합쳐서 새로운 state 반환
            return {
                count: state.count + 1,
                students: [...state.students, newStudent],
            };

        case 'delete-student':
            return;
        default:
            return state;
    } 
};

const initialState = {
    count: 0,
    students: [],
}

export default function MasterUseReducer2() {

    const [name, setName] = useState('');
    const [studentsInfo, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>출석부</h1>
            <p>총 학생 수 : { studentsInfo.count }</p>
            <input 
                type="text"
                placeholder='이름을 입력해주세요'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button
                onClick={() => {
                    dispatch({ type: 'add-student', payload: {name} });
                }}
            >추가</button>
            { studentsInfo.students.map(student => {
                return ( 
                <Student 
                    name={student.name} 
                    key={student.id} 
                    dispatch={dispatch}
                    id={student.id}
                />);
            }) }
        </div>
    )
}
