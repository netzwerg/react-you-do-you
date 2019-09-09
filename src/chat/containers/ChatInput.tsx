import { ChatInput as ChatInputComponent, Props } from '../components/ChatInput'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addMessage, ChatAction } from '../actions'

const mapStateToProps = undefined

const mapDispatchToProps = (dispatch: Dispatch<ChatAction>): Props => {
    return {
        onAddMessage: text => dispatch(addMessage(text))
    }
}

export const ChatInput = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatInputComponent)
