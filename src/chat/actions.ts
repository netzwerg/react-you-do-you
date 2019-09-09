import { Message } from './model'

export const ADD_MESSAGE = 'chat/ADD_MESSAGE'

export type ChatAction = AddMessageAction

export interface AddMessageAction {
    readonly type: typeof ADD_MESSAGE
    readonly message: Message
}

export const addMessage = (text: string): AddMessageAction => {
    return {
        type: ADD_MESSAGE,
        message: {
            text,
            timestamp: Date.now()
        }
    }
}
