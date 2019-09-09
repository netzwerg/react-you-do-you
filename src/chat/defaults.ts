import { ChatState } from './model'
import { List as ImmutableList } from 'immutable'

export const defaultChatState: ChatState = {
    messages: ImmutableList()
}
