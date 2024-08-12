import{test, expect, chromium} from '@playwright/test'
import{Handson} from '../src/pages/handson'
//const { promises } = require('dns')
//const { chromium } = require('playwright')

test('Submit Request', async({page}) =>
{

    // 1.content implemented
    /*const browser=await chromium.launch()
    const context = await browser.newContext()
    const mainPage= await context.newPage()
    await mainPage.goto('https://procurementqat.caresoftglobal.com/')
    */

    // 2.retry assertion (to check url)
    
    const obj1 = new Handson(page)
    await obj1.signin()
    await obj1.selectCard()
    await obj1.addRequest()



})