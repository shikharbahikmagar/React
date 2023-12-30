import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [editFormVisibility, setEditFormVisibility] = useState(false)
  const [inputVal, setInput] = useState('')
  const [editId, setEditId] = useState('')

  const handleEditForm = () => {
      setEditFormVisibility(!editFormVisibility);
  }

  const setInputVal = (todo) =>
  {
    setInput(todo.text)
    
  }

  const setEditIdFun = (id) =>
  {
    setEditId(id)
  }

  return (
    <>
     <h1>Learn About Redux Toolkit</h1>
      <AddTodo editFormVisibility={editFormVisibility} handleEditForm={handleEditForm} editId={editId} inputVal={inputVal} setInputVal={setInputVal} />
      <Todos handleEditForm={handleEditForm}  setEditIdFun={setEditIdFun} setInputVal = {setInputVal}/>
    </>
  )
}

export default App
