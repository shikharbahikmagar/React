
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo} from '../features/todo/todoSlice'

function Todos({ handleEditForm, setInputVal, setEditIdFun }) {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    // const focusToInput = (id) => {
    //     document.getElementById("todoInput").focus()
    //     document.getElementById("todoInput").select()
       
    //     // const text = prompt("enter value");
    //     // dispatch(updateTodo({id: id, text: text}))
    // }
    const handle = (todo) => {

        document.getElementById("todoInput").focus()
        document.getElementById("todoInput").select()
        handleEditForm()
        setInputVal(todo)
        setEditIdFun(todo.id)
    }

    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        <div className='text-white'>{todo.text}</div>
                        <div>
                            <button
                                onClick={() => handle(todo)}
                                className=' text-white bg-red-500 mr-2 px-4 py-1 rounded text-md hover:bg-green-500'
                            >Edit</button>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                            >
                                Delete
                            </button>
                        </div>
                        
                        
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos

