import { Theme, createTheme } from '@material-ui/core'

export const lightTheme: Theme = createTheme({
  palette: {
    type: 'light',
  },
})

export const darkTheme: Theme = createTheme({
  palette: {
    type: 'dark',
  },
})
