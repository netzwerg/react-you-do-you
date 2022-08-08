import { addAlert, markAlertsRead } from './alertSlice'
import { createStore } from '../store'

describe('alertSlice', () => {
  it('handle alert actions', () => {
    const store = createStore()

    store.dispatch(addAlert({ type: 'error', topic: 'test', message: 'hey there' }))
    store.dispatch(addAlert({ type: 'error', topic: 'test', message: 'one more' }))
    store.dispatch(addAlert({ type: 'warning', topic: 'test', message: 'finally' }))

    expect(store.getState().alert.alerts.length).toEqual(3)
    expect(store.getState().alert.unreadCount).toEqual(3)

    store.dispatch(markAlertsRead())
    expect(store.getState().alert.alerts.length).toEqual(3)
    expect(store.getState().alert.unreadCount).toEqual(0)
  })
})
