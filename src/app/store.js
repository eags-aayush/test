import { configureStore } from '@reduxjs/toolkit'
import expensesReducer from '../features/expenseSlice'

export const store = configureStore({
  reducer: expensesReducer
})