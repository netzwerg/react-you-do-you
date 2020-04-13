import { ChatState } from '../chat'
import { ThemeState } from '../theme'

export interface RootState {
  readonly theme: ThemeState
  readonly chat: ChatState
}
