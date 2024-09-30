import { BrowserContext, Page, Locator, expect } from "playwright/test";
import { Addrequest } from "../../src/pages/addRequest_page"
import { data } from "../../testdata/data";
//import { match } from "assert";
 

export class Approver {
    private page: Page
    request: Locator
    search: Locator
    checkbox: Locator
    link: Locator
    approve: Locator
    ok:Locator
    menu: Locator
    private extractedValue: string | null;
    
    constructor(page: Page, extractedValue: string | null) {
        this.page = page;
        this.extractedValue = extractedValue; 
        //this.page = page
        this.menu = this.page.locator('[class="btn btn-flat-white btn-icon btn-sm rounded-pill border-transparent sidebar-control sidebar-main-resize d-none d-lg-inline-flex"]')
        this.request = this.page.getByRole('link', { name: 'Request View', exact: true })
        this.search = this.page.locator('th:nth-child(2) > .form-control')
        // this.searchvalue = this.page.locator('th:nth-child(2) > .form-control')
        this.checkbox = this.page.locator('#All')
        //this.link = this.page.getByRole('link', { name: 'PR-IT/2024/1745' })
        this.link = this.page.getByRole('link', { name: '${extractedValue}' })
        this.approve = this.page.getByRole('link', { name: '' })
        this.ok = this.page.getByRole('button', { name: 'OK' })
        
         }
        
            
    
    public async approver(){  
        //const approver = new Approver(this.page, this.extractedValue);     
//await approver.approver();
    // const approver = new Approver(this.page);
    //await approver.approver();
    await this.menu.click()
    await this.request.click();
    await this.search.click()
    console.log('dynamicvalue')
    
    await this.search.fill(this.extractedValue || ''); // Use the extractedValue
    //await this.search.press('Enter');
    await this.page.pause()

    // await this.checkbox.check();
    // //await page.locator('#Pending').check();
    // await this.link.click();
    // await this.approve.click();
    // await this.ok.click();


    //await this.page.pause()
    }
    // async useExtractedValue(extractedValue: string): Promise<void> {
    //     await this.page.fill('th:nth-child(2) > .form-control', extractedValue); // Adjust the selector
    //     await this.page.click('#submit-button'); // Adjust the button selector
    // }

}
export default Approver