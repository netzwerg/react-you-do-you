import { ChatHistory as ChatHistoryComponent, Props } from '../components/ChatHistory'
import { connect } from 'react-redux'
import { RootState } from '../../store'
import { Dispatch } from 'redux'
import { ChatAction, deleteMessage } from '../actions'

type FromStateProps = Omit<Props, 'onDeleteMessage'>

const mapStateToProps = (state: RootState): FromStateProps => {
    return {
        messages: state.chat.messages.sortBy(m => m.timestamp).reverse()
    }
}

type FromDispatchProps = Omit<Props, 'messages'>

const mapDispatchToProps = (dispatch: Dispatch<ChatAction>): FromDispatchProps => {
    return {
        onDeleteMessage: timestamp => dispatch(deleteMessage(timestamp))
    }
}

export const ChatHistory = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatHistoryComponent)
