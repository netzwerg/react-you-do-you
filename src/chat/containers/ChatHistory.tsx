import { ChatHistory as ChatHistoryComponent } from '../components/ChatHistory'
import * as React from 'react'
import { useTypedDispatch, useTypedState } from '../../store'
import { deleteMessage, DeleteMessageAction } from '../actions'
import { List as ImmutableList } from 'immutable'
import { Message } from '../model'

export const ChatHistory = () => {
  const messages = useTypedState<ImmutableList<Message>>(s => s.chat.messages.sortBy(m => m.timestamp).reverse())

  const dispatch = useTypedDispatch<DeleteMessageAction>()
  const onDeleteMessage = (timestamp: number) => dispatch(deleteMessage(timestamp))

  return <ChatHistoryComponent messages={messages} onDeleteMessage={onDeleteMessage} />
}
