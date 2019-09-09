import { ChatState } from './model'
import { List as ImmutableList } from 'immutable'

export const defaultChatState: ChatState = {
    messages: ImmutableList([
        {
            timestamp: 1568011059155,
            text: 'This may turn into a chat, but is just a list of one-line messages for now'
        },
        {
            timestamp: 1568011059165,
            text: 'Hey there!'
        }
    ])
}
