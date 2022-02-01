import { render, screen } from '../../test/test-utils'
import { Provider } from 'react-redux'
import { App } from './App'
import { store } from '../../store'

it('renders without crashing', () => {
  const Root = () => (
    <Provider store={store}>
      <App />
    </Provider>
  )
  render(<Root />)
  expect(screen.getByText(/React You Do You/)).toBeInTheDocument()
})
