import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../store'

const selectChat = (state: RootState) => state.chat

export const selectChatMessages = createSelector(selectChat, (chat) =>
  [...chat.messages].sort((m1, m2) => m2.timestamp - m1.timestamp),
)
