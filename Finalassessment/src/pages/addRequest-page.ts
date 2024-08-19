import { BrowserContext, Locator, Page, Selectors, expect } from "@playwright/test";
import { data } from "../../dataset/data";
export class Addrequest {
    page: Page
    licensetype: Locator
    itemcategory: Locator
    itemdescription: Locator
    quantity: Locator
    itemUOM: Locator
    PID: Locator
    caresoftentity: Locator
    basecurrency: Locator
    basecurrencyuom: Locator
    dropdown: Locator
    dropdownvalue: Locator
    dropdown2: Locator
    dropdownvalue2: Locator
    ccy: Locator
    checkbox: Locator
    radiobutton: Locator
    radiobutton2: Locator
    datepicker: Locator
    currentDay: Locator
    attachment: Locator
    attach: Locator
    //file:Locator
    filetype: Locator
    uploadbutton: Locator
    ok: Locator
    close: Locator

    constructor(page: Page) {
        this.page = page;
        this.licensetype = this.page.getByPlaceholder('Please enter License type')
        this.itemcategory = this.page.locator('[id="ddlItemCategory"]')
        this.itemdescription = this.page.locator('#ddlItemdescriptions')
        this.quantity = this.page.locator('#txtQty')
        this.itemUOM = this.page.locator('[id="ddlQtyUOM"]')
        this.PID = this.page.locator('[class="multiselect-selected-text"]')
        this.caresoftentity = this.page.locator('#ddlCaresoftEntity')
        this.basecurrency = this.page.locator('[id="txtCostBudgeted"]')
        this.basecurrencyuom = this.page.locator('[class="form-control select-size-sm restrictEnter select2-hidden-accessible"]')
        this.dropdown = this.page.getByRole('textbox', { name: 'Select Base Currency' })
        this.dropdownvalue = this.page.getByRole('option', { name: 'AED' })
        this.ccy = this.page.getByRole('textbox', { name: 'Select Cost Conversion Year' })
        this.dropdown2 = this.page.getByRole('textbox', { name: 'Select Cost Conversion Year' })
        this.dropdownvalue2 = this.page.getByRole('option', { name: 'Apr-' })
        this.checkbox = this.page.locator('[type="checkbox"][value="BAYONE13179C000"]')
        this.radiobutton = this.page.locator('[id="RdnBillabeyes"]')
        this.radiobutton2 = this.page.locator('[id="RdnWorkPlaceCustomer"]')
        this.datepicker = this.page.locator('[id="txtEnddate"]')
        this.currentDay=this.page.locator('[class="today active start-date active end-date in-range available"]')
        //this.currentDay=this.page.locator('[class="today weekend active start-date active end-date available"]')
        //this.currentDay = this.page.locator('[class="today weekend active start-date active end-date in-range available"]')
        
        this.attachment = this.page.locator('[id="btnAttachment"]')
        this.attach = this.page.locator('[id="fileUpload"]')
        this.filetype = this.page.locator('#ddlDocType')
        this.uploadbutton = this.page.locator('#btnUpload')
        this.ok = this.page.getByRole('button', { name: 'OK' })
        this.close = this.page.locator('#Document_Add').getByRole('button').first()
    }

    public async addreq(temp: any) {

        // used wait for time out
        //await this.page.waitForTimeout(5000)

        // used placeHolder text                       
        await this.licensetype.fill(data.licencetypes)

        // Dropdown selection using id                 
        await this.itemcategory.selectOption('Subscription')

        // Dropdown selection using CSS   
        await this.itemdescription.selectOption('ANSA')
        await this.quantity.fill('2')

        await this.itemUOM.selectOption('Units')

        //for loop using $$ locator
        const dd = await this.page.$$('[class="form-control"]')
        for (const element of dd) {
            const text = await element.textContent()
            if (text?.trim() === 'Please enter AMC') {
                await element.click()
                await element.fill('AMC001')

            }
        }

        await this.PID.click()
        //checkbox not to be checked                                 
        await expect(this.checkbox).not.toBeChecked()
        //checkbox click  inside if block         
        await this.checkbox.check()

        await this.caresoftentity.selectOption('Caresoft Global Private Limited')

        // using arrow up key
        await this.basecurrency.click()
        await this.basecurrency.press('ArrowUp');

        //dropdown using click options
        await this.dropdown.click()
        await this.dropdownvalue.click()

        await this.dropdown2.click()
        await this.dropdownvalue2.click()


        //dropdown using get by role
        //await this.ccy.selectOption('Jan-2024')

        //await this.basecurrencyuom.selectOption('AED')


        //if statement                             
        if (await this.radiobutton.isChecked) {
            if (await expect(this.radiobutton2).not.toBeChecked) {
                await this.radiobutton2.check()
                console.log('checked')
            }
        }
        //focus
        //await this.page.pause()
        await this.datepicker.focus()

        //double click                                    
        await this.currentDay.dblclick()

        //Attachment
        await this.attachment.click()

        //switch case
        const doc = 'Invoice';
        switch (doc) {
            
            case 'Invoice':
                await this.filetype.selectOption('Invoice')
                console.log('invoice selected');
                break;

            default:
                console.log('Not a special day');
                break;
        }
        
        const fileInput = this.attach
        await fileInput.setInputFiles('D:/Finalassessment/testfiles/Excel.xlsx')
        await this.uploadbutton.click()
        //response
        //await this.page.waitForResponse('https://procurementqat.caresoftglobal.com/Request', '200')
        await this.ok.click()

        //taken from inspector
        await this.close.click()

        await this.page.pause()
    }
}