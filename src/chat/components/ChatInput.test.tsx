import { vi } from 'vitest'
import { render, screen, userEvent, waitFor } from '../../test/test-utils'
import { ChatInput } from './ChatInput'
import { noOp } from '../../utils'
import { createTheme, ThemeProvider } from '@mui/material'

it('renders without crashing', async () => {
  const onAddMessageMock = vi.fn()

  render(
    <ThemeProvider theme={createTheme()}>
      <ChatInput onAddMessage={onAddMessageMock} onFetchAsyncMessage={noOp} onDemoError={noOp} />
    </ThemeProvider>
  )

  //screen.logTestingPlaygroundURL()

  const input = screen.getByRole('textbox')

  expect(input).toBeInTheDocument()

  userEvent.type(input, 'My custom Message')

  expect(input).toHaveValue('My custom Message')

  userEvent.type(input, '{Enter}')

  await waitFor(() => {
    expect(input).toHaveValue('')
  })

  expect(onAddMessageMock).toHaveBeenCalled()
  expect(onAddMessageMock).toHaveBeenCalledWith('My custom Message')
})
