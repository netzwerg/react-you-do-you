import { createSlice } from '@reduxjs/toolkit'

export type AppTheme = 'light' | 'dark'

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light' as AppTheme,
  reducers: {
    toggleTheme: (state) => {
      return state === 'light' ? 'dark' : 'light'
    },
  },
})

export const themeReducer = themeSlice.reducer
export const { toggleTheme } = themeSlice.actions
