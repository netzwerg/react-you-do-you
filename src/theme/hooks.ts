import { Theme } from '@mui/material'
import { useAppSelector } from '../store'
import { selectCustomTheme } from './selector'

export const useCustomTheme = () => useAppSelector<Theme>(selectCustomTheme)
