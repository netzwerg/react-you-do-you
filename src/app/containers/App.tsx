import { App as AppComponent } from '../components/App'
import * as React from 'react'
import { useTypedState } from '../../store'
import { CssBaseline, MuiThemeProvider as ThemeProvider, Theme } from '@material-ui/core'

export const App = () => {
  // This is the only place we need to access the theme via our own model
  // From here on, it is safe and convenient to use the `useTheme` hook
  const theme = useTypedState<Theme>((s) => s.theme)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppComponent />
    </ThemeProvider>
  )
}
