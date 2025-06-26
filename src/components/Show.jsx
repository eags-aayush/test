import React from 'react'
import { useSelector } from 'react-redux'

const Show = () => {

  const expenses = useSelector(state => state.expenses)
  console.log(expenses)

  return (
    <ul>
      {expenses.map((item) => (
        <li key={item.key}>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  )
}

export default Show
