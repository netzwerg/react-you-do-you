import { RootState } from '../store'
import { createSelector } from '@reduxjs/toolkit'
import { AppTheme } from './themeSlice'
import { createTheme } from '@mui/material'

export const selectTheme = (s: RootState) => s.theme

const createCustomTheme = (theme: AppTheme) => {
  console.log('Creating theme ' + theme)
  return createTheme({
    palette: {
      mode: theme,
    },
  })
}

export const selectCustomTheme = createSelector(selectTheme, createCustomTheme)
