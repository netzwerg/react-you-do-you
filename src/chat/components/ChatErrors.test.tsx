import { render, screen } from '../../test/test-utils'
import { ChatErrors } from './ChatErrors'
import { noOp } from '../../utils'
import { createTheme, ThemeProvider } from '@mui/material'

it('renders without crashing', () => {
  render(
    <ThemeProvider theme={createTheme()}>
      <ChatErrors errors={[{ error: 'Error' }]} onDismissErrors={noOp} />
    </ThemeProvider>
  )
  expect(screen.getByText(/error\(s\)/)).toBeInTheDocument()
})
