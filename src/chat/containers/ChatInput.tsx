import * as React from 'react'
import { useCallback, useState } from 'react'
import { ChatInput as ChatInputComponent } from '../components/ChatInput'
import { useAppDispatch } from '../../store'
import { addChatMessage, fetchChatMessage } from '../chatSlice'
import { addAlert } from '../../alert/alertSlice'

const demoUrl = 'message.txt'

export const ChatInput = () => {
  const dispatch = useAppDispatch()

  const onAddMessage = (text: string) => dispatch(addChatMessage({ text }))
  const onFetchAsyncMessage = () => dispatch(fetchChatMessage(demoUrl))

  const [alertCount, setAlertCount] = useState<number>(0)
  const onDemoError = useCallback(() => {
    const type = alertCount % 2 === 0 ? 'warning' : 'error'
    dispatch(addAlert({ type, topic: 'Demo', message: `A demo ${type}` }))
    setAlertCount((prevCount) => prevCount + 1)
  }, [alertCount, setAlertCount, dispatch])

  return (
    <ChatInputComponent onAddMessage={onAddMessage} onFetchAsyncMessage={onFetchAsyncMessage} onAlert={onDemoError} />
  )
}
