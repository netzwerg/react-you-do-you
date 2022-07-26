import { vi } from 'vitest'
import { Response } from 'node-fetch'
import { createStore } from '../store'
import {
  addChatError,
  addChatMessage,
  ChatError,
  ChatMessage,
  deleteChatMessage,
  dismissChatErrors,
  fetchChatMessage,
} from './chatSlice'

const globalAny = global as any

describe('chatSlice', () => {
  let store = createStore()

  beforeEach(() => {
    store = createStore()
  })

  const getMessages = (): ReadonlyArray<ChatMessage> => store.getState().chat.messages
  const getErrors = (): ReadonlyArray<ChatError> => store.getState().chat.errors

  it(`should handle ${addChatMessage.type} action`, () => {
    const timestamp = 1234
    const message = { text: 'test', timestamp }
    const initialMessages = getMessages()
    store.dispatch(addChatMessage(message))
    expect(getMessages()).toEqual([...initialMessages, message])
  })

  it(`should handle ${deleteChatMessage.type} action`, () => {
    const timestampToDelete = getMessages()[0].timestamp

    store.dispatch(deleteChatMessage(timestampToDelete))
    expect(getMessages().find((m) => m.timestamp === timestampToDelete)).toBeFalsy()
  })

  it(`should handle ${addChatError.type} and ${dismissChatErrors.type} actions`, () => {
    expect(getErrors().length).toEqual(0)
    store.dispatch(addChatError('a test error'))
    expect(getErrors().length).toEqual(1)
    store.dispatch(dismissChatErrors())
    expect(getErrors().length).toEqual(0)
  })

  it('fetchMessage', async () => {
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

    expect(getErrors().length).toEqual(0)
    await store.dispatch(fetchChatMessage(testUrlError))
    expect(getErrors().length).toEqual(1)
  })
})
