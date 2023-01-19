import { Theme } from '@mui/material'
import { useAppSelector } from '../store'
import { selectCustomTheme } from './selectors'

// WARNING: You should never need to use this hook, it is only needed to
// initialize MUIs `ThemeProvider` (inside `App`)
// --> You are probably looking for `useTheme` (@mui/system)
export const useCustomTheme = () => useAppSelector<Theme>(selectCustomTheme)
