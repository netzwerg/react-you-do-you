import { vi } from 'vitest'
import { render, screen } from '../../test/test-utils'
import { ThemeSwitch } from './ThemeSwitch'
import userEvent from '@testing-library/user-event'
import { act } from '@testing-library/react'

it('renders without crashing', async () => {
  const toggleMock = vi.fn()
  render(<ThemeSwitch theme={'light'} onToggleTheme={toggleMock} />)
  const toggler = screen.getByRole('checkbox')
  expect(toggler).toBeInTheDocument()
  await act(async () => {
    await userEvent.click(toggler)
    expect(toggleMock).toHaveBeenCalled()
  })
})
