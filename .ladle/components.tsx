import type { GlobalProvider } from '@ladle/react'
import { useLadleContext } from '@ladle/react'
import { ThemeProvider } from '@mui/material/styles'
import { useCustomTheme } from '../src/theme/hooks'
import React, { ReactNode, useEffect } from 'react'
import { store, useAppDispatch } from '../src/store'
import { setTheme } from '../src/theme/themeSlice'
import { Provider as ReduxProvider } from 'react-redux'
import { CssBaseline } from '@mui/material'

// noinspection JSUnusedGlobalSymbols
export const Provider: GlobalProvider = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <ThemeAwareDecorator>{children}</ThemeAwareDecorator>
    </ReduxProvider>
  )
}

interface Props {
  readonly children: ReactNode
}

const ThemeAwareDecorator = ({ children }: Props) => {
  const { globalState } = useLadleContext()
  const { theme: ladleTheme } = globalState

  const muiTheme = useCustomTheme()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setTheme(ladleTheme === 'dark' ? 'dark' : 'light'))
  }, [ladleTheme])

  // FIXME: Missing re-render
  // - yarn ladle serve (starts with Ladle 'light' theme)
  // - select 'Switch' component in tree on the right
  // - toggle Ladle theme to 'dark' (button lower left corner)
  // Expected:
  // - useEffect above syncs updates our muiTheme to Ladle theme
  // - this component right here re-renders (due to useCustomTheme hook)
  // Actual:
  // - Our theme is properly updated in the Redux store
  // - no re-rendering (MUI uses dark font on dark background)

  console.log({ muiTheme: muiTheme.palette.mode, ladleTheme })

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
