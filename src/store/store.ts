import { createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './reducer'
import { RootState } from './model'
import { RootAction } from './actions'

export const configureStore = (): Store<RootState, RootAction> => {
    return createStore(rootReducer, composeWithDevTools())
}
