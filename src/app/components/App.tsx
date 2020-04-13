import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { ThemeSwitch } from '../../theme'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { ChatErrors, ChatHistory, ChatInput } from '../../chat'

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

export const App = () => {
  const classes = useStyles()
  return (
    <div className="App">
      <AppBar className={classes.toolbar}>
        <Toolbar>
          <ThemeSwitch />
        </Toolbar>
      </AppBar>
      <div className={classes.main}>
        <ChatInput />
        <ChatHistory />
      </div>
      <ChatErrors />
    </div>
  )
}
