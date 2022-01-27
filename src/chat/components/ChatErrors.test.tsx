import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, createTheme } from '@mui/material'

import { ChatErrors } from './ChatErrors'
import { noOp } from '../../utils'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const theme = createTheme()
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <ChatErrors errors={[]} onDismissErrors={noOp} />
    </ThemeProvider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
