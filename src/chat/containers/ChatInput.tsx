import * as React from 'react'
import { ChatInput as ChatInputComponent } from '../components/ChatInput'
import { addChatError, addMessage, ChatAction, fetchMessage } from '../actions'
import { useTypedDispatch } from '../../store'

const demoUrl = 'message.txt' // resides in `public` folder
const errorMessage = 'A demo error'

export const ChatInput = () => {
  const dispatch = useTypedDispatch<ChatAction>()
  const onAddMessage = (text: string) => dispatch(addMessage(text))
  const onFetchAsyncMessage = () => dispatch(fetchMessage(demoUrl))
  const onDemoError = () => dispatch(addChatError(errorMessage))
  return (
    <ChatInputComponent
      onAddMessage={onAddMessage}
      onFetchAsyncMessage={onFetchAsyncMessage}
      onDemoError={onDemoError}
    />
  )
}
