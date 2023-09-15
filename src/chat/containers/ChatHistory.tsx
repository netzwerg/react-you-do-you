import { ChatHistory as ChatHistoryComponent } from '../components/ChatHistory'
import * as React from 'react'
import { useAppDispatch } from '../../store'
import { deleteChatMessage } from '../chatSlice'
import { useChatMessages } from '../hooks'

export const ChatHistory = () => {
  const messages = useChatMessages()

  const dispatch = useAppDispatch()
  const onDeleteMessage = (timestamp: number) => dispatch(deleteChatMessage(timestamp))

  return <ChatHistoryComponent messages={messages} onDeleteMessage={onDeleteMessage} />
}
