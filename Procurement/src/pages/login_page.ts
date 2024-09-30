import { BrowserContext, Page, Locator, selectors, expect } from "playwright/test";
import { data } from "../../testdata/data";
export class Login
{
page: Page
url: string
username:Locator
username1:Locator
password: Locator

constructor(page: Page)
{
    this.page = page
    this.url='https://procurementqat.caresoftglobal.com/'
    this.username = page.locator('[name="username"]')
    this.username1 = page.locator('[name="username"]')
    this.password = page.locator('[id="txtPassword"]')
    console.log('Requester loggedin successfully')

}

public async login_requestor()
{
    await this.page.goto(this.url)
    await this.username1.fill(data.username)
    await this.password.fill(data.password)
    await this.password.press('Enter')

}

public async login_approver()
{
    await this.page.goto(this.url)
    await this.username1.fill(data.username1)
    await this.password.fill(data.password)
    await this.password.press('Enter')
    

}


}