import { ChatError, Message } from './model'
import { Dispatch } from 'redux'

export const ADD_MESSAGE = 'chat/ADD_MESSAGE'
export const DELETE_MESSAGE = 'chat/DELETE_MESSAGE'

export const ADD_CHAT_ERROR = 'chat/ADD_CHAT_ERROR'
export const DISMISS_CHAT_ERRORS = 'chat/DISMISS_CHAT_ERRORS'

export type ChatAction = AddMessageAction | DeleteMessageAction | AddChatErrorAction | DismissChatErrorsAction

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

export const fetchMessage = (serviceUrl: string) => {
    return (dispatch: Dispatch<ChatAction>): Promise<ChatAction> => {
        return fetch(serviceUrl)
            .then(response => {
                if (response.ok) {
                    return response.text()
                }
                throw new Error('Network response not ok.')
            })
            .then(message => dispatch(addMessage(message)))
            .catch(error => dispatch(addChatError(error.message)))
    }
}

export interface AddChatErrorAction {
    readonly type: typeof ADD_CHAT_ERROR
    readonly error: ChatError
}

export const addChatError = (error: string): AddChatErrorAction => {
    return {
        type: ADD_CHAT_ERROR,
        error: {
            error
        }
    }
}

export interface DismissChatErrorsAction {
    readonly type: typeof DISMISS_CHAT_ERRORS
}

export const dismissChatErrors = (): DismissChatErrorsAction => {
    return {
        type: DISMISS_CHAT_ERRORS
    }
}
