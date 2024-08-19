import { BrowserContext, Locator, Page, Selectors, expect } from "@playwright/test";
import { data } from "../../dataset/data";
const { promises } = require('dns')
const { chromium } = require('playwright')
export class Handson {
    page: Page
    url: string
    username: Locator
    password: Locator

    constructor(page: Page) {
        this.page = page;
        this.url = 'https://procurementqat.caresoftglobal.com/'
        this.username = page.locator('[name="username"]')
        this.password = page.locator('[id="txtPassword"]')
    }

    public async login() {

        // validating the url
        await this.page.goto(this.url);
        await expect(this.page).toHaveURL(this.url)

        // To check the field is enabled
        await expect(this.username).toBeEnabled()
        await this.username.fill(data.username)

        // To check the field is not disabled
        await expect.soft(this.password).not.toBeDisabled()
        await this.password.fill(data.password)

        // Used keyboard enter key
        await this.password.press('Enter')

        // To check wait for the load state
        await this.page.waitForLoadState()

        //expect(resp.status()).toBe(201);
    }
}
