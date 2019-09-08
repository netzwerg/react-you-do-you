import createMuiTheme, { Theme } from '@material-ui/core/styles/createMuiTheme'

export const lightTheme: Theme = createMuiTheme({
    palette: {
        type: 'light'
    }
})

export const darkTheme: Theme = createMuiTheme({
    palette: {
        type: 'dark'
    }
})
