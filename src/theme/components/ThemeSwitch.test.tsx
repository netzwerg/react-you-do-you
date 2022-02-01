import { vi } from 'vitest'
import { render, screen, userEvent } from '../../test/test-utils'
import { ThemeSwitch } from './ThemeSwitch'

it('renders without crashing', () => {
  const toggleMock = vi.fn()

  render(<ThemeSwitch theme={'light'} onToggleTheme={toggleMock} />)

  const toggler = screen.getByRole('checkbox')

  expect(toggler).toBeInTheDocument()

  userEvent.click(toggler)

  expect(toggleMock).toHaveBeenCalled()
})
