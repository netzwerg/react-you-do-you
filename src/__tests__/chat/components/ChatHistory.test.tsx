import React from 'react'
import ReactDOM from 'react-dom'
import { ChatHistory } from '../../../chat/components/ChatHistory'
import { defaultChatState } from '../../../chat/defaults'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ChatHistory messages={defaultChatState.messages} />, div)
    ReactDOM.unmountComponentAtNode(div)
})
