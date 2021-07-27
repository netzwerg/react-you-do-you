import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { App } from './App'
import { store } from '../../store'

it('renders without crashing', () => {
  const Root = () => (
    <Provider store={store}>
      <App />
    </Provider>
  )
  const div = document.createElement('div')
  ReactDOM.render(<Root />, div)
  ReactDOM.unmountComponentAtNode(div)
})
