import * as React from 'react'
import { ThemeSwitch as ThemeSwitchComponent } from '../components/ThemeSwitch'
import { toggleTheme } from '../index'
import { useAppDispatch, useAppSelector } from '../../store'

export const ThemeSwitch = () => {
  const theme = useAppSelector((s) => s.theme)
  const dispatch = useAppDispatch()
  const onToggleTheme = () => dispatch(toggleTheme())
  return <ThemeSwitchComponent theme={theme} onToggleTheme={onToggleTheme} />
}
