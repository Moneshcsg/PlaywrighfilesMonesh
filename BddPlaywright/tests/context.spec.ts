import { test, expect } from '@playwright/test'
const { promises } = require('dns')
const { chromium } = require('playwright')
test('Assessment2', async ({ }) => {

    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page1 = await context.newPage()
    //const page2 = await context.newPage()

    await page1.goto('https://adaptiveqat.caresoftglobal.com/')
    await page1.getByPlaceholder('User ID / Email ID').fill('620048')
    await page1.getByRole('textbox', { name: 'Password' }).fill('Test123@')
    await page1.getByRole('textbox', { name: 'Password' }).press('Enter')
   
    const page2Promise = page1.waitForEvent('popup')
    
    await page1.locator('[class="pq-grid-row pq-grid-oddRow "][pq-row-indx="0"]').nth(0).dblclick()
    //await page2.goto('https://adaptiveqat.caresoftglobal.com/DynamicWorkFlow')
    await page1.pause()
})