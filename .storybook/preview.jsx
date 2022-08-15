import React from 'react'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { useDarkMode } from 'storybook-dark-mode'
import { Provider } from 'react-redux'
import { store } from '../src/store'
import { muiCache } from '../src/app/containers/App'
import { CacheProvider } from '@emotion/react'
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

  if (theme.palette.mode !== store.getState().theme) {
    store.dispatch(toggleTheme())
  }

  return (
    <Provider store={store}>
      <CacheProvider value={muiCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  )
}

export const decorators = [withMuiTheme]
