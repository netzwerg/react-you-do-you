import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type AppTheme = 'light' | 'dark'

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'dark' as AppTheme,
  reducers: {
    toggleTheme: (state) => {
      return state === 'light' ? 'dark' : 'light'
    },
    setTheme: (_, action: PayloadAction<AppTheme>) => {
      return action.payload
    },
  },
})

export const themeReducer = themeSlice.reducer
export const { toggleTheme, setTheme } = themeSlice.actions
