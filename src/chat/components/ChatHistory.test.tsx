import { render, screen } from '../../test/test-utils'
import { ChatHistory } from './ChatHistory'
import { noOp } from '../../utils'
import { createTheme, ThemeProvider } from '@mui/material'

it('renders without crashing', () => {
  render(
    <ThemeProvider theme={createTheme()}>
      <ChatHistory messages={[{ text: 'Test Message', timestamp: 0 }]} onDeleteMessage={noOp} />
    </ThemeProvider>
  )
  expect(screen.getByText('Test Message')).toBeInTheDocument()
})
