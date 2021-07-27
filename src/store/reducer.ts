import { ThemeAction, themeReducer } from '../theme'
import { ChatAction, chatReducer } from '../chat'
import { RootAction } from './actions'
import { RootState } from './model'
import { defaultChatState } from '../chat/defaults'
import { defaultTheme } from '../theme/defaults'

const defaultState = {
  theme: defaultTheme,
  chat: defaultChatState,
}

export const rootReducer = (state: RootState = defaultState, action: RootAction) => ({
  theme: themeReducer(state.theme, action as ThemeAction),
  chat: chatReducer(state.chat, action as ChatAction),
})
