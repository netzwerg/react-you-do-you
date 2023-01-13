import { render, screen } from '../../test/test-utils'
import { ChatHistory } from './ChatHistory'
import { noOp } from '../../utils'

it('renders without crashing', async () => {
  await render(<ChatHistory messages={[{ text: 'Test Message', timestamp: 0 }]} onDeleteMessage={noOp} />)
  expect(await screen.findByText('Test Message')).toBeInTheDocument()
})
