import { Theme } from '@material-ui/core'
import { ThemeAction, TOGGLE_THEME } from './actions'
import { darkTheme, lightTheme } from './model'
import { defaultTheme } from './defaults'

export const reducer = (state: Theme = defaultTheme, action: ThemeAction): Theme => {
  if (action.type === TOGGLE_THEME) {
    return state.palette.type === 'light' ? darkTheme : lightTheme
  } else {
    return state
  }
}
