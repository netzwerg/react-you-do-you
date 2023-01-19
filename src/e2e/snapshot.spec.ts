import { test, expect } from '@playwright/test'

// we can't create tests asynchronously, thus using the sync-fetch lib
import fetch from 'sync-fetch'

const url = 'http://localhost:61000'

const stories = fetch(`${url}/meta.json`).json().stories

Object.keys(stories).forEach((storyKey) => {
  test(`${storyKey} - compare snapshots`, async ({ page }) => {
    await page.goto(`${url}/?story=${storyKey}&mode=preview`)
    // stories are code-split, wait for them to be loaded
    await page.waitForSelector('[data-storyloaded]')
    await expect(page).toHaveScreenshot(`${storyKey}.png`)
  })
})
