import React from 'react'
import ReactDOM from 'react-dom'
import { noOp } from '../../utils'
import { ChatErrors } from '../../../chat/components/ChatErrors'
import { List as ImmutableList } from 'immutable'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ChatErrors errors={ImmutableList()} onDismissErrors={noOp} />, div)
    ReactDOM.unmountComponentAtNode(div)
})
