import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteExpense } from '../features/expenseSlice'

const Show = () => {

  const expenses = useSelector(state => state.expenses || [])
  const dispatch = useDispatch()

  return (
    <ul>
      {expenses.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={() => dispatch(deleteExpense(item.id))}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default Show
