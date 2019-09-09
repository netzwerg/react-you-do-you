import { ChatHistory as ChatHistoryComponent, Props } from '../components/ChatHistory'
import { connect } from 'react-redux'
import { RootState } from '../../store'

const mapStateToProps = (state: RootState): Props => {
    return {
        messages: state.chat.messages.sortBy(m => m.timestamp).reverse()
    }
}

export const ChatHistory = connect(mapStateToProps)(ChatHistoryComponent)
