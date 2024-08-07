import { Todo, TodoListPRops } from "../Interface"


const TodoList = ({todos, removeTodo}: TodoListPRops) => {
  return (
    <div>
        {
            todos?.map((i: Todo )=>(
                <>
                 <p>{i.text}</p>
                 <button onClick={()=>removeTodo(i.id)}>delete</button>
                </>
            ))
        }
    </div>
  )
}

export default TodoList