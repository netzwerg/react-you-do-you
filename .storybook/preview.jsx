import React, { useEffect } from 'react'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { useDarkMode } from 'storybook-dark-mode'
import { Provider } from 'react-redux'
import { store } from '../src/store'
import { toggleTheme } from '../src/theme/themeSlice'

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
  const themePaletteMode = darkMode ? 'dark' : 'light'
  const theme = createTheme({ palette: { mode: themePaletteMode } })

  useEffect(() => {
    if (theme.palette.mode !== store.getState().theme) {
      store.dispatch(toggleTheme())
    }
  }, [theme.palette.mode, store.dispatch, store.getState().theme])

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    </Provider>
  )
}

export const decorators = [withMuiTheme]
