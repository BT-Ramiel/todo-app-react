import React from 'react'
// components
import Input from './components/Input'
import TodoItem from './components/TodoItem'
// styles
import './App.css'
// redux
import { useSelector } from 'react-redux'
import { selectTodoList } from './features/todoSlice'

function App() {
  const todoList = useSelector(selectTodoList)

  return (
    <div className="App">
      <Input />
      <div className="app__todoContainer">
        {todoList.map(({ item, done, id }) => (
          <TodoItem name={item} done={done} id={id} />
        ))}
      </div>
    </div>
  )
}

export default App
