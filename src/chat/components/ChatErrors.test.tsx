import { render, screen } from '../../test/test-utils'
import { ChatErrors } from './ChatErrors'
import { noOp } from '../../utils'

it('renders without crashing', () => {
  render(<ChatErrors errors={[{ error: 'Error' }]} onDismissErrors={noOp} />)
  expect(screen.getByText(/error\(s\)/)).toBeInTheDocument()
})
