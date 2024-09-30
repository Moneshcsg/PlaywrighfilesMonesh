import { BrowserContext, Page, Locator, expect } from "playwright/test";
import { data } from "../../testdata/data";
import { Approver } from "../../src/pages/approver_page";
export class Addrequest {
    
    private page: Page
    addbutton: Locator
    expectedDeliveryDate: Locator
    date1: Locator
    itemcategory: Locator
    itemdescription: Locator
    licensetype: Locator
    quantity: Locator
    itemUOM: Locator
    perQuantity: Locator
    PID: Locator
    caresoftentity: Locator
    requestedBugdet: Locator
    basecurrencyuom: Locator
    basecurrencyvalue: Locator
    costconversionyear: Locator
    costconversionyearvalue: Locator
    datepicker: Locator
    currentDay: Locator
    save: Locator
    PIDvalue: Locator
    success: Locator
    itemid: Locator
    toaster: Locator
    okbutton: Locator
    submit: Locator
    Approver: any
    globalVariable: any
    extractedValue:any
    test:any
    Connect:any

    constructor(page: Page) {
        this.page = page
        this.addbutton = this.page.locator('[id="btnadd"]')
        this.expectedDeliveryDate = this.page.locator('[id="txtExpectedDeliveryDate"]')
        this.date1 = this.page.locator('[class="today active start-date active end-date in-range available"]')
        this.itemcategory = this.page.locator('[id="ddlItemCategory"]')
        this.itemdescription = this.page.locator('[id="ddlItemdescriptions"]')
        this.licensetype = this.page.getByPlaceholder('Please enter License type')
        this.quantity = this.page.locator('[id="txtQty"]')
        this.itemUOM = this.page.locator('[id="ddlQtyUOM"]')
        this.perQuantity = this.page.locator('[id="txtPerQuantity"]')
        this.PID = this.page.locator('[class="multiselect-selected-text"]')
        this.PIDvalue = this.page.locator('[type="checkbox"][value="BAYONE13179C000"]')
        this.caresoftentity = this.page.locator('[id="ddlCaresoftEntity"]')
        this.requestedBugdet = this.page.locator('#IT_Costfinance').getByPlaceholder('Requested Budget', { exact: true })
        this.basecurrencyuom = this.page.getByRole('textbox', { name: 'Select Base Currency' })
        this.basecurrencyvalue = this.page.getByRole('option', { name: 'AED' })
        this.costconversionyear = this.page.getByRole('textbox', { name: 'Select Cost Conversion Year' })
        this.costconversionyearvalue = this.page.getByRole('option', { name: 'Mar-' })
        this.datepicker = this.page.locator('[id="txtEnddate"]')
        this.currentDay=this.page.locator('[class="today active start-date active end-date in-range available"]')
        //this.currentDay = this.page.locator('[class="today weekend active start-date active end-date in-range available"]')
        this.save = this.page.locator('[id="btnSave"]')
        this.success = this.page.locator('div').filter({ hasText: 'Procurement Request "PR-IT/' }).nth(3)
        this.itemid = this.page.getByRole('cell', { name: 'PR-IT/2024/1714-' })
        this.toaster = this.page.locator(`[class="bootbox-body"]`)
        this.okbutton = this.page.getByRole('button', {name: 'OK'})
        this.submit=this.page.locator('[id="btnsubmit"]')
        this.extractedValue = null;
    }
    public async addrequest(): Promise<void> {
        // const addRequest = new Addrequest(this.page);
        // await addRequest.addrequest();
        // const extractedValue = addRequest.getExtractedValue();
        //click add button
        await this.addbutton.click()

        //Item Details                 
        await this.itemcategory.selectOption('Subscription')
        await this.itemdescription.selectOption('ANSA')
        await this.licensetype.fill(data.licensetype)
        await this.quantity.fill(data.quantity1)
        await this.itemUOM.selectOption('Units')
        await this.perQuantity.fill(data.quantity2)

        //Cost and Finance
        await this.PID.click()
        await this.PIDvalue.check()
        await this.caresoftentity.selectOption('Caresoft Global Private Limited')
        await this.requestedBugdet.fill(data.requestedBugdet)
        await this.basecurrencyuom.click()
        await this.basecurrencyvalue.click()
        await this.costconversionyear.click()
        await this.costconversionyearvalue.click()
        await this.datepicker.focus()
        await this.currentDay.dblclick()
        await this.save.click()
        const toaster = await this.page.locator('[class="bootbox-body"]')
        const messageContent = await toaster.textContent();
        

        if (!messageContent) {
            console.log('Toaster message content is empty or not found');
            return;
        }

        console.log(`Toaster message: ${messageContent}`)
        const regex = /"(PR-IT\/\d{4}\/\d{4})-\d{2}"/;
        const match = messageContent.match(regex);

        // if (match) {
            
        //     let extractedValue = match[1];
        //     console.log(`Extracted value: ${extractedValue}`);
            
        // } else {    
        //     console.log('No match found');
        // }

        if (match) {
            this.extractedValue = match[1]; // Store extractedValue
            console.log(`Extracted value: ${this.extractedValue}`);
        } else {    
            console.log('No match found');
        }
        await this.okbutton.click()
        await this.submit.click()
        await this.okbutton.click()
        //await this.page.pause()

    }
    public getExtractedValue(): string | null {
        return this.extractedValue; // Method to get the extracted value
    }
    // async extractDynamicValue(): Promise<string> {
    //     const element = await this.page.locator('[class="bootbox-body"]'); // Adjust the selector
    //     const extractedValue = await element.innerText();
    //     console.log(`Extracted value: ${extractedValue}`);
    //     return extractedValue;
    // }
}

export default Addrequest;