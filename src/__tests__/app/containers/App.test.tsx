import React from 'react'
import ReactDOM from 'react-dom'
import { App } from '../../../app'
import { configureStore } from '../../../store'
import { Provider } from 'react-redux'

it('renders without crashing', () => {
    const store = configureStore()

    const Root = () => (
        <Provider store={store}>
            <App />
        </Provider>
    )

    const div = document.createElement('div')
    ReactDOM.render(<Root />, div)
    ReactDOM.unmountComponentAtNode(div)
})
