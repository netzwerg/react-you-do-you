import { vi } from 'vitest'
import { Response } from 'node-fetch'
import { createStore } from '../store'
import { addChatMessage, ChatMessage, deleteChatMessage, fetchChatMessage } from './chatSlice'
import { Alert } from '../alert/alertSlice'

const globalAny = global as any

describe('chatSlice', () => {
  let store = createStore()

  beforeEach(() => {
    store = createStore()
  })

  const getMessages = (): ReadonlyArray<ChatMessage> => store.getState().chat.messages
  const getAlerts = (): ReadonlyArray<Alert> => store.getState().alert.alerts

  it(`handle ${addChatMessage.type} action`, () => {
    const timestamp = 1234
    const message = { text: 'test', timestamp }
    const initialMessages = getMessages()
    store.dispatch(addChatMessage(message))
    expect(getMessages()).toEqual([...initialMessages, message])
  })

  it(`handle ${deleteChatMessage.type} action`, () => {
    const timestampToDelete = getMessages()[0].timestamp

    store.dispatch(deleteChatMessage(timestampToDelete))
    expect(getMessages().find((m) => m.timestamp === timestampToDelete)).toBeFalsy()
  })

  it(`${fetchChatMessage.name} action`, async () => {
    const testUrlOk = 'test-url-ok'
    const testUrlError = 'test-url-error'
    const message = 'Hey there'

    globalAny.fetch = vi.fn().mockImplementation((url) => {
      switch (url) {
        case `${testUrlOk}`:
          return Promise.resolve(new Response(message))
        case `${testUrlError}`:
          return Promise.reject(new Error('Test error handling'))
        default:
          throw new Error('Unexpected fetch call (no mock implementation)')
      }
    })

    expect(getMessages().filter((m) => m.text === message).length).toEqual(0)
    await store.dispatch(fetchChatMessage(testUrlOk))
    expect(getMessages().filter((m) => m.text === message).length).toEqual(1)

    expect(getAlerts().length).toEqual(0)
    await store.dispatch(fetchChatMessage(testUrlError))
    expect(getAlerts().length).toEqual(1)
  })
})
