import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { themeReducer } from '../theme'
import { chatReducer } from '../chat'

export const reducer = combineReducers({
  theme: themeReducer,
  chat: chatReducer,
})

export type RootState = ReturnType<typeof reducer>

export const createStore = () =>
  configureStore({
    reducer,
  })

export const store = createStore()

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector = <T>(selector: (state: RootState) => T): T => useSelector<RootState, T>(selector)
