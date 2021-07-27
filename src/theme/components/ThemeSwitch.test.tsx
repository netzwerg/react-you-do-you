import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeSwitch } from './ThemeSwitch'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ThemeSwitch theme={'light'} onToggleTheme={() => {}} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
