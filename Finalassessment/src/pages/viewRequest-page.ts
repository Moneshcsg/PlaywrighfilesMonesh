import { BrowserContext, Locator, Page, Selectors, expect } from "@playwright/test";
//import { data } from "../../dataset/data";
export class Viewrequest {
page:Page
   
    addbutton: Locator

    constructor(page: Page) {
        this.page = page;
        // used CSS selector
        this.addbutton = this.page.locator('#btnadd')
}

public async viewreq(temp:any) { 
    //await this.page.getByRole('heading', { name: temp }).click()
    await this.addbutton.click()
}
}