import React from 'react'
import ReactDOM from 'react-dom'
import { ChatInput } from '../../../chat/components/ChatInput'
import { noOp } from '../../utils'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ChatInput onAddMessage={noOp} onFetchAsyncMessage={noOp} onDemoError={noOp} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
