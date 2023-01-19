import { RootState } from '../store'
import { createSelector } from '@reduxjs/toolkit'
import { createTheme } from '@mui/material'

const LIGHT_THEME = createTheme({
  palette: {
    mode: 'light',
  },
})

const DARK_THEME = createTheme({
  palette: {
    mode: 'dark',
  },
})

export const selectTheme = (s: RootState) => s.theme

export const selectCustomTheme = createSelector(selectTheme, (theme) => (theme === 'light' ? LIGHT_THEME : DARK_THEME))
