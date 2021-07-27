import * as React from 'react'
import { ChatErrors as ChatErrorsComponent } from '../components/ChatErrors'
import { useAppDispatch, useAppSelector } from '../../store'
import { dismissChatErrors } from '../chatSlice'

export const ChatErrors = () => {
  const errors = useAppSelector((s) => s.chat.errors)

  const dispatch = useAppDispatch()
  const onDismissErrors = () => dispatch(dismissChatErrors())

  return <ChatErrorsComponent errors={errors} onDismissErrors={onDismissErrors} />
}
