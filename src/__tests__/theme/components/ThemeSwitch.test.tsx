import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeSwitch } from '../../../theme/components/ThemeSwitch'
import { lightTheme } from '../../../theme'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ThemeSwitch theme={lightTheme} onToggleTheme={() => void {}} />, div)
    ReactDOM.unmountComponentAtNode(div)
})
