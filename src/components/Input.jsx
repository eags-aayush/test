import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addExpense } from '../features/expenseSlice'

const Input = () => {

    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const dispatchHandler = (e) => {
        e.preventDefault()
        dispatch(addExpense(input))
        setInput('')
    }

    return (
        <form onSubmit={dispatchHandler}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit">Submit!</button>
        </form>
    )
}

export default Input
