import { useState } from "react"

const defaultTodoList = [
    {
        id: 1,
        content: "필라테스 다녀오기",
        date: dayjs(),
        isSuccess: false,
    },
    {
        id: 2,
        content: "성묵이랑 치킨 먹기",
        date: dayjs(),
        isSuccess: true,
    },
    {
        id: 3,
        content: "리액트 네이티브 스터디",
        date: dayjs(),
        isSuccess: false,
    },
]

export const useTodoList = (selectedDate) => {
    const [todoList, setTodoList] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        const len = todoList.length;
        
        const newTodoList = [
            ...defaultTodoList,
            {
                id: len === 0 ? 0 : todoList[len-1].id+1,
                content: input,
                date: selectedDate,
                isSuccess: false,
            } 
        ]
        setTodoList(newTodoList);
    }

    const removeTodo = (todoId) => {
        const newTodoList = todoList.filter(todo => todo.id !== todoId);
        setTodoList(newTodoList);
    }

    const toggleTodo = (todoId) => {
        const newTodoList = todoList.map(todo => todo.id === todoId ? {...todo, isSuccess: !todo.isSuccess } : todo);
        setTodoList(newTodoList);
    }

    return {
        todoList, 
        addTodo,
        removeTodo,
        toggleTodo,
        input,
        setInput,
    }
}