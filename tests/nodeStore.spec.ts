import { describe, it, expect, vi } from 'vitest'
import { createNodesStore } from '../src/lib/stores/nodes.svelte'
import * as api from '../src/lib/api'

describe('nodesStore', () => {
  it('should set nodes and clear error on successful refresh', async () => {
    const testNodes = [
      {
        publicKey: '1234567890abcdef',
        alias: 'Satoshi Nakamoto',
        channels: 10,
        capacity: 100000000,
        firstSeen: 1609459200,
        updatedAt: 1609459300,
        country: {
          de: 'Deutschland',
          en: 'USA',
          es: 'Spanish',
          fr: 'France',
          ja: 'Japan',
          'pt-BR': 'Brazil',
          ru: 'Russia',
          'zh-CN': 'China'
        },
        city: null,
        iso_code: 'US',
        subdivision: null
      }
    ]
    vi.spyOn(api, 'fetchNodes').mockResolvedValueOnce(testNodes)

    const store = createNodesStore()
    await store.refresh()

    expect(store.nodes).toEqual(testNodes)
    expect(store.error).toBeNull()
    expect(store.loading).toBe(false)
  })

  it('should set error on refresh failure', async () => {
    const errorMessage = 'API error'
    vi.spyOn(api, 'fetchNodes').mockRejectedValueOnce(new Error(errorMessage))

    const store = createNodesStore()
    await store.refresh()

    expect(store.error).not.toBeNull()
    expect(store.error?.message).toBe(errorMessage)
    expect(store.loading).toBe(false)
  })
})
