import { App as AppComponent } from '../components/App'
import { ThemeProvider } from '@mui/material/styles'
import { useCustomTheme } from '../../theme/hooks'
import { CssBaseline } from '@mui/material'

export const App = () => {
  const theme = useCustomTheme()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppComponent />
    </ThemeProvider>
  )
}
