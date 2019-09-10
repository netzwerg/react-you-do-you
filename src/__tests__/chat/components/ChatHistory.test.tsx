import React from 'react'
import ReactDOM from 'react-dom'
import { ChatHistory } from '../../../chat/components/ChatHistory'
import { defaultChatState } from '../../../chat/defaults'
import { noOp } from '../../utils'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ChatHistory messages={defaultChatState.messages} onDeleteMessage={noOp} />, div)
    ReactDOM.unmountComponentAtNode(div)
})
