import Todoinput from "./components/Todoinput"
import TodoList from "./components/Todolist"
import { useState, useEffect } from 'react'

function App() {

  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

function persistTodos(newList) {
  localStorage.setItem('todos', JSON.stringify({todos : newList}))
 
}


function addTodo(newTodo) 
{
  const updatedTodos = [...todos, newTodo]
  persistTodos(updatedTodos)
  setTodos(updatedTodos)
}
function deleteTodo(index) {
  const newTodolist = todos.filter((todo, todoIndex) => {
    return todoIndex !== index
  })
  persistTodos(newTodolist)
  setTodos(newTodolist)

}

function editTodo (index) {
  const valueToEdit = todos[index]
  
  setTodoValue(valueToEdit)
  deleteTodo (index)
}

useEffect(() => {
   if (!localStorage)
   {
    return
   }
   let localTodos = localStorage.getItem('todos')
    if (!localTodos) 
    {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
}, [])

  return (
    
    <main>
      <Todoinput todoValue = {todoValue} setTodoValue = {setTodoValue} addTodo = {addTodo} />
      <TodoList editTodo = {editTodo}  deleteTodo = {deleteTodo} todos = {todos} />
      
    </main>
  )
}

export default App
