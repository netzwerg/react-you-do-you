import { useLadleContext } from '@ladle/react'
import { ThemeProvider } from '@mui/material/styles'
import { useCustomTheme } from '../theme/hooks'
import React, { FC, ReactNode, useEffect } from 'react'
import { store, useAppDispatch } from '../store'
import { setTheme } from '../theme/themeSlice'
import { Provider as ReduxProvider } from 'react-redux'
import { CssBaseline } from '@mui/material'

export const CommonStoryDecorator = (Component: FC) => (
  <ReduxProvider store={store}>
    <ThemeAwareDecorator>
      <Component />
    </ThemeAwareDecorator>
  </ReduxProvider>
)

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
  }, [ladleTheme, dispatch])

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
