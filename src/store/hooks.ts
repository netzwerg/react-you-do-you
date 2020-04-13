import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from './model'
import { RootAction } from './actions'

// A type-safe/domain-specific wrapper around the Redux useDispatch hook (see https://react-redux.js.org/api/hooks#usedispatch)
export const useTypedDispatch = <A extends RootAction>() => useDispatch<ThunkDispatch<RootState, {}, A>>()

// A type-safe/domain-specific wrapper around the Redux useSelector hook (see https://react-redux.js.org/api/hooks#useselector)
export const useTypedState = <T>(selector: (state: RootState) => T): T => useSelector<RootState, T>(selector)
