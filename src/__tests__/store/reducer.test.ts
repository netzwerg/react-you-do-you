import { TOGGLE_THEME } from '../../theme/actionTypes'
import { darkTheme, lightTheme, toggleTheme, ToggleThemeAction } from '../../theme'
import { rootReducer } from '../../store/reducer'
import { RootState } from '../../store'

describe('root reducer', () => {
    it(`should handle ${TOGGLE_THEME} action`, () => {
        const initialState: RootState = {
            theme: lightTheme
        }
        const action: ToggleThemeAction = toggleTheme()
        let state = rootReducer(initialState, action)
        expect(state.theme).toEqual(darkTheme)
        state = rootReducer(state, action)
        expect(state.theme).toEqual(lightTheme)
    })
})
