import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { useDarkMode } from 'storybook-dark-mode'
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

const withMuiTheme = (Story, { args }) => {
  const darkMode = useDarkMode() || args.theme === 'dark'
  const theme = !darkMode ? lightTheme : darkTheme

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </MuiThemeProvider>
  )
}

export const decorators = [withMuiTheme]
