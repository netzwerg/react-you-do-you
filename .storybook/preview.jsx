import React from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { useDarkMode } from 'storybook-dark-mode'
import { createTheme } from '@mui/material'

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
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  )
}

export const decorators = [withMuiTheme]
