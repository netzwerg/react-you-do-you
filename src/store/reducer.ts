import { themeReducer } from '../theme'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    theme: themeReducer
})
