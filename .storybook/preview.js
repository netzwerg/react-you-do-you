import { useMemo } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { darkTheme, lightTheme } from '../src/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withMuiTheme = (Story, context) => {
  const mode = context.globals?.muiMode
  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode])
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </MuiThemeProvider>
  )
}

export const decorators = [withMuiTheme]
