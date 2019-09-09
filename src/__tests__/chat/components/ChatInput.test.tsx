import React from 'react'
import ReactDOM from 'react-dom'
import { ChatInput } from '../../../chat/components/ChatInput'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ChatInput onAddMessage={() => {}} />, div)
    ReactDOM.unmountComponentAtNode(div)
})
