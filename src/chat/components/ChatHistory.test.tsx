import React from 'react'
import ReactDOM from 'react-dom'
import { ChatHistory } from './ChatHistory'
import { noOp } from '../../utils'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ChatHistory messages={[]} onDeleteMessage={noOp} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
