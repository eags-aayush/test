import { configureStore } from '@reduxjs/toolkit'
import arrayReducer from '../features/expenseSlice'

export const store = configureStore({
  reducer: {arrayReducer}
})