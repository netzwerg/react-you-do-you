import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeSwitch } from '../../../theme/components/ThemeSwitch'
import { lightTheme } from '../../../theme'
import { noOp } from '../../utils'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ThemeSwitch theme={lightTheme} onToggleTheme={noOp} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
