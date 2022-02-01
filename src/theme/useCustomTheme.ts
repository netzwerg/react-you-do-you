import { createTheme, Theme } from '@mui/material'
import { useAppSelector } from '../store'

export const useCustomTheme = () =>
  useAppSelector<Theme>((s) =>
    createTheme({
      palette: {
        mode: s.theme,
      },
    })
  )
