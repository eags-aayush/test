import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  expenses: []
}

export const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addExpense: (state, action) => {
        state.expenses.push({
            id: Date.now(),
            text: action.payload
        })
    },

    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter((item) => item.id !==action.payload)
    },
  }
})

export const { addExpense, deleteExpense } = expenseSlice.actions

export default expenseSlice.reducer