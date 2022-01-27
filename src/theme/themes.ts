import { Theme, createTheme } from '@mui/material'

export const lightTheme: Theme = createTheme({
  palette: {
    mode: 'light',
  },
})

export const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
  },
})
