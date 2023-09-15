import { useAppSelector } from '../store'

import { selectChatMessages } from './selectors'

export const useChatMessages = () => useAppSelector(selectChatMessages)
