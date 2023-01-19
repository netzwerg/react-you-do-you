import { setTheme, toggleTheme } from './themeSlice'
import { createStore } from '../store'
import { selectTheme } from './selectors'

describe('themeSlice', () => {
  it(`should handle ${toggleTheme.type} action`, () => {
    const store = createStore()
    const getTheme = () => selectTheme(store.getState())

    expect(getTheme()).toEqual('dark')
    store.dispatch(toggleTheme())
    expect(getTheme()).toEqual('light')
  })
  it(`should handle ${setTheme.type} action`, () => {
    const store = createStore()
    const getTheme = () => selectTheme(store.getState())

    expect(getTheme()).toEqual('dark')
    store.dispatch(setTheme('light'))
    expect(getTheme()).toEqual('light')
  })
})
