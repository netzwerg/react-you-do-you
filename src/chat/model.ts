import { List as ImmutableList } from 'immutable'

export interface ChatState {
    readonly messages: ImmutableList<Message>
    readonly errors: ImmutableList<ChatError>
}

export interface Message {
    readonly timestamp: number
    readonly text: string
}

export interface ChatError {
    readonly error: string
}
