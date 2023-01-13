import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { createTheme, ThemeProvider } from '@mui/material'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({ palette: { mode: 'light' } })
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
