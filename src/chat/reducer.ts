import { ChatState } from './model'
import { defaultChatState } from './defaults'
import { ADD_MESSAGE, ChatAction } from './actions'

export const reducer = (state: ChatState = defaultChatState, action: ChatAction): ChatState => {
    if (action.type === ADD_MESSAGE) {
        return {
            ...state,
            messages: state.messages.push(action.message)
        }
    } else {
        return state
    }
}
