import React, { useState } from 'react'
export default function Todoinput(props) {
    const { todoValue, setTodoValue, addTodo } = props
    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)

            }} placeholder="Enter a task" />
            <button onClick={() => {
                addTodo(todoValue)
                setTodoValue('')
            } }>Add</button>
        </header>
    )
    }