import * as React from 'react'
import { ThemeSwitch as ThemeSwitchComp } from '../components/ThemeSwitch'
import { ThemeAction } from '../actions'
import { toggleTheme } from '../index'
import { useTypedDispatch, useTypedState } from '../../store'
import { Theme } from '@material-ui/core'

export const ThemeSwitch = () => {
  const theme = useTypedState<Theme>(s => s.theme)
  const dispatch = useTypedDispatch<ThemeAction>()
  const onToggleTheme = () => dispatch(toggleTheme())
  return <ThemeSwitchComp theme={theme} onToggleTheme={onToggleTheme} />
}
