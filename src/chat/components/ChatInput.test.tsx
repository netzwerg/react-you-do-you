import { vi } from 'vitest'
import { screen, setup } from '../../test/test-utils'
import { ChatInput } from './ChatInput'
import { noOp } from '../../utils'
import { createTheme, ThemeProvider } from '@mui/material'

it('renders without crashing', async () => {
  const onAddMessageMock = vi.fn()

  const { user } = setup(
    <ThemeProvider theme={createTheme()}>
      <ChatInput onAddMessage={onAddMessageMock} onFetchAsyncMessage={noOp} onAlert={noOp} />
    </ThemeProvider>
  )

  const input = screen.getByRole('textbox')

  expect(input).toBeInTheDocument()

  await user.type(input, 'My custom Message')

  expect(input).toHaveValue('My custom Message')

  await user.type(input, '{Enter}')

  expect(input).toHaveValue('')

  expect(onAddMessageMock).toHaveBeenCalled()
  expect(onAddMessageMock).toHaveBeenCalledWith('My custom Message')
})
