import { BrowserContext, Page, Locator, expect } from "playwright/test";
export class ProcurementSelect
{
    page:Page
    procure: Locator
    constructor(page:Page)
    {
        this.page = page
        this.procure = this.page.getByRole('heading', { name: 'Software' })
    }
    public async procurementselect_software()
    {
        await this.procure.click()
        console.log('Software procurement is selected')
        
    }
}