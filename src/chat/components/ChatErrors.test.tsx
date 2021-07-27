import React from 'react'
import ReactDOM from 'react-dom'
import { ChatErrors } from './ChatErrors'
import { noOp } from '../../utils'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ChatErrors errors={[]} onDismissErrors={noOp} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
