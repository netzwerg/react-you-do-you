import { Theme } from '@mui/material'
import { useAppSelector } from '../store'
import { selectCustomTheme } from './selectors'

export const useCustomTheme = () => useAppSelector<Theme>(selectCustomTheme)
