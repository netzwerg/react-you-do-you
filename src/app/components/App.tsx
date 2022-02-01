import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { ThemeSwitch } from '../../theme'
import { ChatErrors, ChatHistory, ChatInput } from '../../chat'
import { Box, Typography } from '@mui/material'

export const App = () => {
  return (
    <>
      <AppBar>
        <Toolbar
          sx={{
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            justifyItems: 'end',
          }}
          variant={'dense'}
        >
          <Typography>{`React You Do You – v${import.meta.env.VITE_APP_VERSION}`}</Typography>
          <ThemeSwitch />
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: 'grid',
          height: '100vh',
          width: '100vw',
          gridTemplateRows: 'auto 1fr',
          gridRowGap: 8,
          paddingTop: 10,
          paddingLeft: '20vw',
          paddingRight: '20vw',
        }}
      >
        <ChatInput />
        <ChatHistory />
      </Box>
      <ChatErrors />
    </>
  )
}
