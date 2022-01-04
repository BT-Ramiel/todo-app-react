import React, { useState } from 'react'
// redux
import { useDispatch } from 'react-redux'
import { saveTodo } from '../../features/todoSlice'
// styles
import './input.css'

const Input = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const onChangeInput = (event) => {
    setInput(event.target.value)
  }

  const addTodo = () => {
    dispatch(saveTodo({ item: input, done: false, id: Date.now() }))
  }

  return (
    <div className="input">
      <input value={input} onChange={onChangeInput} type={'text'} />
      <button onClick={addTodo}>Add</button>
    </div>
  )
}

export default Input
