import { configureStore } from '@reduxjs/toolkit'
import employees from './slices/employeesSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    employees,
  },
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()