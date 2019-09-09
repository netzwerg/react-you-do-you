import React from 'react'
import { CssBaseline, Theme } from '@material-ui/core'
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { ThemeSwitch } from '../../theme'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { ChatHistory, ChatInput } from '../../chat'

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
        gridTemplateRows: 'auto 1fr',
        gridRowGap: 8,
        paddingTop: 100,
        paddingLeft: '20vw',
        paddingRight: '20vw'
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
                    <ChatInput />
                    <ChatHistory />
                </div>
            </ThemeProvider>
        </div>
    )
}
