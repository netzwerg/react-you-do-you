import { createStore, Store, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './reducer'
import { RootState } from './model'
import { RootAction } from './actions'
import thunk from 'redux-thunk'

export const configureStore = (): Store<RootState, RootAction> => {
    return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
}
