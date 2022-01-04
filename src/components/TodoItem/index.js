import React from 'react'
// material ui
import { Checkbox } from '@material-ui/core'
// styles
import './todoItem.css'
// redux
import { useDispatch } from 'react-redux'
import { setCheck } from '../../features/todoSlice'

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch()

  const handleCheck = () => {
    dispatch(setCheck(id))
  }

  return (
    <div className="todoItem">
      <Checkbox checked={done} onChange={handleCheck} color="primary" />
      <p className={done && 'todoItem--done'}>{name}</p>
    </div>
  )
}

export default TodoItem
