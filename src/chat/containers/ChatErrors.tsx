import * as React from 'react'
import { ChatErrors as ChatErrorsComponent } from '../components/ChatErrors'
import { useTypedDispatch, useTypedState } from '../../store'
import { dismissChatErrors, DismissChatErrorsAction } from '../actions'
import { List as ImmutableList } from 'immutable'
import { ChatError } from '../model'

export const ChatErrors = () => {
  const errors = useTypedState<ImmutableList<ChatError>>(s => s.chat.errors)

  const dispatch = useTypedDispatch<DismissChatErrorsAction>()
  const onDismissErrors = () => dispatch(dismissChatErrors())

  return <ChatErrorsComponent errors={errors} onDismissErrors={onDismissErrors} />
}
