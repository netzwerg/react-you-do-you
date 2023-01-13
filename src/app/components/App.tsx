import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { ThemeSwitch } from '../../theme/containers/ThemeSwitch'
import { Typography, SxProps, Theme, Box } from '@mui/material'
import { ChatInput } from '../../chat/containers/ChatInput'
import { ChatHistory } from '../../chat/containers/ChatHistory'
import { Alerts } from '../../alert/containers/Alerts'

const sxToolbar: SxProps<Theme> = (theme) => ({
  display: 'grid',
  gridTemplateColumns: '1fr auto auto',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    pl: 1,
    pr: 1,
  },
})

const sxTitle: SxProps<Theme> = (theme) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: theme.typography.caption.fontSize,
  },
})

const sxMain: SxProps<Theme> = (theme) => ({
  display: 'grid',
  height: '100vh',
  width: '100vw',
  gridTemplateRows: 'auto 1fr',
  gap: 8,
  pt: '100px',
  pl: '20vw',
  pr: '20vw',
  [theme.breakpoints.down('md')]: {
    pl: 1,
    pr: 1,
  },
})

export const App = () => {
  return (
    <>
      <AppBar>
        <Toolbar sx={sxToolbar}>
          <Typography sx={sxTitle} noWrap>{`React You Do You – v${import.meta.env.VITE_APP_VERSION}`}</Typography>
          <Alerts />
          <ThemeSwitch />
        </Toolbar>
      </AppBar>
      <Box sx={sxMain}>
        <ChatInput />
        <ChatHistory />
      </Box>
    </>
  )
}
