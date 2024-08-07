
import { useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import { Todo } from './Interface'
import TodoList from './components/TodoList'
function App() {
  const storedTodo = localStorage.getItem("todoItem");
  const initialTodo = storedTodo ? JSON.parse(storedTodo) : [];
  const [todos, setTodos] = useState<Todo[]>(initialTodo);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
    }
    setTodos([...todos, newTodo])
  }
  localStorage.setItem('todoItem', JSON.stringify(todos))

  const removeTodo = (id : number) =>{
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <>  
      <CreateTodo addTodo={addTodo} />
      <TodoList todos={todos} removeTodo = {removeTodo} />
    </>
  )
}

export default App


