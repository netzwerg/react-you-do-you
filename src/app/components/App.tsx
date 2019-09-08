import React from 'react'
import { CssBaseline, Theme } from '@material-ui/core'
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { ThemeSwitch } from '../../theme'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
    toolbar: {
        display: 'grid',
        gridTemplateColumns: 'auto',
        justifyItems: 'end'
    },
    main: {
        display: 'grid',
        height: '100vh',
        width: '100vw',
        padding: 100
    }
})

export interface Props {
    readonly theme: Theme
}

export const App = ({ theme }: Props) => {
    const classes = useStyles()
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar className={classes.toolbar}>
                    <Toolbar>
                        <ThemeSwitch />
                    </Toolbar>
                </AppBar>
                <div className={classes.main}>
                    <Typography>Yay, hello there :-)</Typography>
                </div>
            </ThemeProvider>
        </div>
    )
}
