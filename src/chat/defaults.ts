import { ChatState } from './model'
import { List as ImmutableList } from 'immutable'

export const defaultChatState: ChatState = {
    messages: ImmutableList([
        {
            timestamp: 1568011059155,
            text: 'Hey there!'
        },
        {
            timestamp: 1568011059165,
            text: 'This may turn into a chat, but is just a list of messages for now'
        }
    ])
}
