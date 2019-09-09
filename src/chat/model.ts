import { List as ImmutableList } from 'immutable'

export interface ChatState {
    readonly messages: ImmutableList<Message>
}

export interface Message {
    readonly timestamp: number
    readonly text: string
}
