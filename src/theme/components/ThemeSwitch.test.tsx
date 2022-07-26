import { vi } from 'vitest'
import { screen, setup } from '../../test/test-utils'
import { ThemeSwitch } from './ThemeSwitch'

it('renders without crashing', async () => {
  const toggleMock = vi.fn()
  const { user } = setup(<ThemeSwitch theme={'light'} onToggleTheme={toggleMock} />)
  const toggler = screen.getByRole('checkbox')
  expect(toggler).toBeInTheDocument()
  await user.click(toggler)
  expect(toggleMock).toHaveBeenCalled()
})
