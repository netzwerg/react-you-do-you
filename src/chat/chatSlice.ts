import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch } from '../store'

export interface ChatState {
  readonly messages: ReadonlyArray<ChatMessage>
  readonly errors: ReadonlyArray<ChatError>
}

export interface ChatMessage {
  readonly timestamp: number
  readonly text: string
}

export interface ChatError {
  readonly error: string
}

const initialState: ChatState = {
  messages: [
    {
      timestamp: 1568011059155,
      text: 'This pretends to be a chat, but is just a list of one line messages 🤷🏼‍♀️',
    },
    {
      timestamp: 1568011059165,
      text: 'Hey there!',
    },
  ],
  errors: [],
}

interface AddMessagePayload {
  readonly text: string
  readonly timestamp?: number
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addChatMessage: (state: ChatState, action: PayloadAction<AddMessagePayload>) => ({
      ...state,
      messages: state.messages.concat({
        text: action.payload.text,
        timestamp: action.payload.timestamp ?? Date.now(),
      }),
    }),
    deleteChatMessage: (state: ChatState, action: PayloadAction<number>) => ({
      ...state,
      messages: state.messages.filter((m) => m.timestamp !== action.payload),
    }),
    addChatError: (state: ChatState, action: PayloadAction<string>) => ({
      ...state,
      errors: state.errors.concat({
        error: action.payload,
      }),
    }),
    dismissChatErrors: (state: ChatState) => ({
      ...state,
      errors: [],
    }),
  },
})

export const { addChatMessage, deleteChatMessage, addChatError, dismissChatErrors } = chatSlice.actions

export const chatReducer = chatSlice.reducer

export const fetchChatMessage = (serviceUrl: string) => async (dispatch: AppDispatch) => {
  return fetch(serviceUrl)
    .then((response) => {
      if (response.ok) {
        return response.text()
      }
      throw new Error('Network response not ok.')
    })
    .then((text) => dispatch(addChatMessage({ text })))
    .catch((error) => dispatch(addChatError(error.message)))
}
