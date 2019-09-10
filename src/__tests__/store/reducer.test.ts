import { darkTheme, lightTheme, TOGGLE_THEME, toggleTheme, ToggleThemeAction } from '../../theme'
import { rootReducer } from '../../store/reducer'
import { RootState } from '../../store'
import { List as ImmutableList } from 'immutable'
import { ADD_MESSAGE, addMessage, AddMessageAction, DELETE_MESSAGE, deleteMessage } from '../../chat'

const initialState: RootState = {
    theme: lightTheme,
    chat: {
        messages: ImmutableList(),
        errors: ImmutableList()
    }
}

describe('root reducer', () => {
    it(`should handle ${TOGGLE_THEME} action`, () => {
        const action: ToggleThemeAction = toggleTheme()
        let state = rootReducer(initialState, action)
        expect(state.theme).toEqual(darkTheme)
        state = rootReducer(state, action)
        expect(state.theme).toEqual(lightTheme)
    })
    it(`should handle ${ADD_MESSAGE} action`, () => {
        const text = 'hey there'
        const action: AddMessageAction = addMessage(text)
        let state = rootReducer(initialState, action)
        expect(state.chat.messages.size).toEqual(1)
        expect(state.chat.messages.get(0)!.text).toEqual(text)
    })
    it(`should handle ${DELETE_MESSAGE} action`, () => {
        const timestamp = 42

        let state = rootReducer(initialState, addMessage('one'))
        state = rootReducer(state, addMessage('two', timestamp))
        state = rootReducer(state, addMessage('three'))
        expect(state.chat.messages.size).toEqual(3)
        expect(state.chat.messages.find(m => m.text === 'two')).toBeTruthy()

        state = rootReducer(state, deleteMessage(timestamp))
        expect(state.chat.messages.size).toEqual(2)
        expect(state.chat.messages.find(m => m.text === 'two')).toBeFalsy()
    })
})
