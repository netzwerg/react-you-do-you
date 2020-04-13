import { ThemeAction, TOGGLE_THEME } from './actions'
import { darkTheme, lightTheme, ThemeState } from './model'

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  if (action.type === TOGGLE_THEME) {
    return state.palette.type === 'light' ? darkTheme : lightTheme
  } else {
    return state
  }
}
