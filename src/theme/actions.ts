import { TOGGLE_THEME } from './actionTypes'

export interface ToggleThemeAction {
    readonly type: typeof TOGGLE_THEME
}

export const toggleTheme = (): ToggleThemeAction => {
    return {
        type: TOGGLE_THEME
    }
}

export type ThemeAction = ToggleThemeAction
