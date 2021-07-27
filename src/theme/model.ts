import { createMuiTheme, Theme } from '@material-ui/core'

export type ThemeState = Theme

export const lightTheme: Theme = createMuiTheme({
  palette: {
    type: 'light',
  },
})

export const darkTheme: Theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})
