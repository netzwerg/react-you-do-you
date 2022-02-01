import { App as AppComponent } from '../components/App'
import * as React from 'react'
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material'
import { useCustomTheme } from '../../theme'

export const App = () => {
  // This is the only explicit access to our custom theme
  // From here on, it is safe and convenient to use the `useTheme` hook
  const theme = useCustomTheme()
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppComponent />
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
