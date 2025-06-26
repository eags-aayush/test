import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  expenses: []
}

export const arraySlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addExpense: (state, action) => {
        state.expenses.push({
            id: Date.now(),
            text: action.payload
        })
    }
  }
})

export const { addExpense } = arraySlice.actions

export default arraySlice.reducer