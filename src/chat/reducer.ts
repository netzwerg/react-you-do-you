import { ChatState } from './model'
import { defaultChatState } from './defaults'
import { ADD_CHAT_ERROR, ADD_MESSAGE, ChatAction, DELETE_MESSAGE, DISMISS_CHAT_ERRORS } from './actions'
import { List as ImmutableList } from 'immutable'

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
    case ADD_CHAT_ERROR:
      console.log(action.error.error)
      return {
        ...state,
        errors: state.errors.push(action.error)
      }
    case DISMISS_CHAT_ERRORS:
      return {
        ...state,
        errors: ImmutableList()
      }
    default:
      return state
  }
}
