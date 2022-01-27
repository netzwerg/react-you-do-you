import { App as AppComponent } from '../components/App'
import * as React from 'react'
import { CssBaseline, ThemeProvider, StyledEngineProvider, Theme } from '@mui/material'
import { useAppSelector } from '../../store'
import { darkTheme, lightTheme } from '../../theme'

export const App = () => {
  // This is the only place we need to access the theme via our own model
  // From here on, it is safe and convenient to use the `useTheme` hook
  const theme = useAppSelector<Theme>((s) => (s.theme === 'dark' ? darkTheme : lightTheme))
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppComponent />
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
