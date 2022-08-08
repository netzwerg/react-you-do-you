import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { addAlert } from '../alert/alertSlice'

export interface ChatState {
  readonly messages: ReadonlyArray<ChatMessage>
}

export interface ChatMessage {
  readonly timestamp: number
  readonly text: string
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
  },
})

export const { addChatMessage, deleteChatMessage } = chatSlice.actions

export const chatReducer = chatSlice.reducer

export const fetchChatMessage = createAsyncThunk('chat/fetchChatMessage', async (serviceUrl: string, thunkAPI) => {
  try {
    const response = await fetch(serviceUrl)
    if (response.ok) {
      const text = await response.text()
      thunkAPI.dispatch(addChatMessage({ text }))
    } else {
      thunkAPI.dispatch(addAlert({ type: 'error', topic: 'Demo', message: 'Network response not ok.' }))
    }
  } catch (e: any) {
    thunkAPI.dispatch(addAlert({ type: 'error', topic: 'Demo', message: e.message }))
  }
})
