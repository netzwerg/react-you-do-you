import { Message } from './model'

export const ADD_MESSAGE = 'chat/ADD_MESSAGE'
export const DELETE_MESSAGE = 'chat/DELETE_MESSAGE'

export type ChatAction = AddMessageAction | DeleteMessageAction

export interface AddMessageAction {
    readonly type: typeof ADD_MESSAGE
    readonly message: Message
}

export const addMessage = (text: string, timestamp?: number): AddMessageAction => {
    return {
        type: ADD_MESSAGE,
        message: {
            text,
            timestamp: timestamp || Date.now()
        }
    }
}

export interface DeleteMessageAction {
    readonly type: typeof DELETE_MESSAGE
    readonly timestamp: number
}

export const deleteMessage = (timestamp: number): DeleteMessageAction => {
    return {
        type: DELETE_MESSAGE,
        timestamp
    }
}
