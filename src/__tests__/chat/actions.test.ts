import { configureStore } from '../../store'
import { fetchMessage } from '../../chat'

const globalAny = global as any

describe('chat actions', () => {
  it('fetchMessage', async () => {
    const testUrlOk = 'test-url-ok'
    const testUrlError = 'test-url-error'
    const message = 'Hey there'

    globalAny.fetch = jest.fn().mockImplementation((url) => {
      switch (url) {
        case `${testUrlOk}`:
          return Promise.resolve(new Response(message))
        case `${testUrlError}`:
          return Promise.reject(new Error('Test error handling'))
        default:
          throw new Error('Unexpected fetch call (no mock implementation)')
      }
    })

    const store = configureStore()

    expect(store.getState().chat.messages.filter((m) => m.text === message).size).toEqual(0)
    await fetchMessage(testUrlOk)(store.dispatch)
    expect(store.getState().chat.messages.filter((m) => m.text === message).size).toEqual(1)

    expect(store.getState().chat.errors.size).toEqual(0)
    await fetchMessage(testUrlError)(store.dispatch)
    expect(store.getState().chat.errors.size).toEqual(1)
  })
})
