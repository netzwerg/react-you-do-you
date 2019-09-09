import { ChatState } from './model'
import { defaultChatState } from './defaults'
import { ADD_MESSAGE, ChatAction, DELETE_MESSAGE } from './actions'

export const reducer = (state: ChatState = defaultChatState, action: ChatAction): ChatState => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: state.messages.push(action.message)
            }
        case DELETE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter(m => m.timestamp !== action.timestamp)
            }
        default:
            return state
    }
}
