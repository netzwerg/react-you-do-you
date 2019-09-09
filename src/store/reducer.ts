import { themeReducer } from '../theme'
import { combineReducers } from 'redux'
import { chatReducer } from '../chat'
import { RootAction } from './actions'
import { RootState } from './model'

type RootReducer = (state: RootState | undefined, action: RootAction) => RootState

export const rootReducer: RootReducer = combineReducers({
    theme: themeReducer,
    chat: chatReducer
})
