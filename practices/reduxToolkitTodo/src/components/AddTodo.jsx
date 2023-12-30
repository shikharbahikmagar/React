import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo, updateTodo } from '../features/todo/todoSlice'

function AddTodo({ editFormVisibility, handleEditForm, inputVal, editId, setInputVal }) {
    const todos = useSelector(state => state.todos)
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const updateTodoHandler = (e) => {
                e.preventDefault()
                dispatch(updateTodo({id: editId, text: input}))
                setInput('')
                handleEditForm()
            }
    
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    useEffect(() => {
        setInput(inputVal)
    } , [inputVal])


    return (
            <>
            {editFormVisibility ? (<form onSubmit={updateTodoHandler} className="space-x-3 mt-12">
                <input
                    id='todoInput'
                    type="text"
                    className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Enter a Todo..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button

                    id='btnAdd'
                    type="submit"
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                    Update
                </button>
            </form>) : (<form onSubmit={addTodoHandler} className="space-x-3 mt-12">
                <input
                    id='todoInput'
                    type="text"
                    className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Enter a Todo..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button

                    id='btnAdd'
                    type="submit"
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                    Add
                </button>
            </form>) }

            </>        
    )
}

export default AddTodo
