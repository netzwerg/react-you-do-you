import * as React from 'react'
import { ChatInput as ChatInputComponent } from '../components/ChatInput'
import { useAppDispatch } from '../../store'
import { addChatError, addChatMessage, fetchChatMessage } from '../chatSlice'

const demoUrl = process.env.PUBLIC_URL + '/message.txt'
const errorMessage = 'A demo error'

export const ChatInput = () => {
  const dispatch = useAppDispatch()
  const onAddMessage = (text: string) => dispatch(addChatMessage({ text }))
  const onFetchAsyncMessage = () => dispatch(fetchChatMessage(demoUrl))
  const onDemoError = () => dispatch(addChatError(errorMessage))
  return (
    <ChatInputComponent
      onAddMessage={onAddMessage}
      onFetchAsyncMessage={onFetchAsyncMessage}
      onDemoError={onDemoError}
    />
  )
}
