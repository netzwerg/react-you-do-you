import { toggleTheme } from './themeSlice'
import { createStore } from '../store'

describe('themeSlice', () => {
  it(`should handle ${toggleTheme.type} action`, () => {
    const store = createStore()
    const getTheme = () => store.getState().theme

    expect(getTheme()).toEqual('light')
    store.dispatch(toggleTheme())
    expect(getTheme()).toEqual('dark')
  })
})
