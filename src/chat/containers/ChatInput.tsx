import { ChatInput as ChatInputComponent, Props } from '../components/ChatInput'
import { connect } from 'react-redux'
import { addChatError, addMessage, ChatAction, fetchMessage } from '../actions'
import { ThunkDispatch } from 'redux-thunk'
import { ChatState } from '../model'

const mapStateToProps = undefined

const demoUrl = 'message.txt' // resides in `public` folder
const errorMessage = 'A demo error'

const mapDispatchToProps = (dispatch: ThunkDispatch<ChatState, {}, ChatAction>): Props => {
  return {
    onAddMessage: text => dispatch(addMessage(text)),
    onFetchAsyncMessage: () => dispatch(fetchMessage(demoUrl)),
    onDemoError: () => dispatch(addChatError(errorMessage))
  }
}

export const ChatInput = connect(mapStateToProps, mapDispatchToProps)(ChatInputComponent)
