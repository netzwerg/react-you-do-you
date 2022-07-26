import * as React from 'react'
import { ThemeSwitch as ThemeSwitchComponent } from '../components/ThemeSwitch'
import { useAppDispatch, useAppSelector } from '../../store'
import { toggleTheme } from '../themeSlice'

export const ThemeSwitch = () => {
  const theme = useAppSelector((s) => s.theme)
  const dispatch = useAppDispatch()
  const onToggleTheme = () => dispatch(toggleTheme())
  return <ThemeSwitchComponent theme={theme} onToggleTheme={onToggleTheme} />
}
