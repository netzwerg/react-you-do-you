import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import { ChatInput } from './ChatInput'
import { noOp } from '../../utils'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const theme = createTheme()
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <ChatInput onAddMessage={noOp} onFetchAsyncMessage={noOp} onDemoError={noOp} />
    </ThemeProvider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
