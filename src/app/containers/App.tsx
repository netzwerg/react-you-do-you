import { App as AppComponent } from '../components/App'
import { ThemeProvider } from '@mui/material/styles'
import { useCustomTheme } from '../../theme/useCustomTheme'
import { CssBaseline } from '@mui/material'

export const App = () => {
  // This is the only place we need to access the theme via our own model
  // From here on, it is safe and convenient to use the `useTheme` hook
  const theme = useCustomTheme()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppComponent />
    </ThemeProvider>
  )
}
