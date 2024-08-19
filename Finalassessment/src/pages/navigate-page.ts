import { BrowserContext, Locator, Page, Selectors, expect } from "@playwright/test";
import test from "node:test";
//import { data } from "../../dataset/data";
export class Navigate {
page:Page
    //card: Locator

    constructor(page: Page) {
        this.page = page;
        //this.card=this.page.getByRole('heading', { name: 'Software' })
}

public async selectCard(temp:any) {
    
    //let soft=`'${temp}'`
    // used string to fetch data on runtime
    await this.page.getByRole('heading', { name: temp }).click()
    //await this.card.click()
}
}