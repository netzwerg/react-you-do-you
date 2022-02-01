import { render, screen } from '../../test/test-utils'
import { ChatHistory } from './ChatHistory'
import { noOp } from '../../utils'

it('renders without crashing', () => {
  render(<ChatHistory messages={[{ text: 'Test Message', timestamp: 0 }]} onDeleteMessage={noOp} />)
  expect(screen.getByText('Test Message')).toBeInTheDocument()
})
