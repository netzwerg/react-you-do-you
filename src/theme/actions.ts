export const TOGGLE_THEME = 'theme/TOGGLE_THEME'

export type ThemeAction = ToggleThemeAction

export interface ToggleThemeAction {
  readonly type: typeof TOGGLE_THEME
}

export const toggleTheme = (): ToggleThemeAction => {
  return {
    type: TOGGLE_THEME,
  }
}
