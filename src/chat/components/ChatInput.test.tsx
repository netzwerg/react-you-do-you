import { vi } from 'vitest'
import { render, screen } from '../../test/test-utils'
import { ChatInput } from './ChatInput'
import { createTheme, ThemeProvider } from '@mui/material'
import userEvent from '@testing-library/user-event'
import { act } from '@testing-library/react'

it('renders without crashing', async () => {
  const onAddMessageMock = vi.fn()

  render(
    <ThemeProvider theme={createTheme()}>
      <ChatInput onAddMessage={onAddMessageMock} onFetchAsyncMessage={() => {}} onAlert={() => {}} />
    </ThemeProvider>
  )

  const input = await screen.findByRole('textbox')

  expect(input).toBeInTheDocument()

  await act(() => userEvent.type(input, 'My custom Message'))

  expect(input).toHaveValue('My custom Message')

  await act(() => userEvent.type(input, '{Enter}'))

  expect(input).toHaveValue('')

  expect(onAddMessageMock).toHaveBeenCalled()
  expect(onAddMessageMock).toHaveBeenCalledWith('My custom Message')
})
