import { BrowserContext, Locator, Page, Selectors, expect } from "@playwright/test";
import { data } from "../../dataset/data";
export class Handson {
    page: Page
    url: string
    username: Locator
    password: Locator
    card: Locator
    addbutton: Locator
    licensetype:Locator
    itemcategory: Locator
    itemdescription:Locator
    quantity:Locator
    itemUOM:Locator
    PID:Locator
    checkbox:Locator
    radiobutton:Locator
    radiobutton2:Locator
    datepicker:Locator
    currentDay:Locator
    attachment:Locator
    attach:Locator
    file:Locator
    filetype:Locator
    uploadbutton:Locator

    constructor(page: Page) {
        this.page = page;
        this.url= 'https://procurementqat.caresoftglobal.com/'
        this.username= this.page.locator('[name="username"]')
        this.password= this.page.locator('[id="txtPassword"]')
        this.card=this.page.getByRole('heading', { name: 'Software' })
        this.addbutton = this.page.locator('#btnadd')
        this.licensetype=this.page.getByPlaceholder('Please enter License type')
        this.itemcategory=this.page.locator('[id="ddlItemCategory"]')
        this.itemdescription=this.page.locator('#ddlItemdescriptions')
        this.quantity=this.page.locator('#txtQty')
        this.itemUOM=this.page.locator('[id="ddlQtyUOM"]')
        this.PID=this.page.locator('[class="multiselect-selected-text"]')
        this.checkbox=this.page.locator('[type="checkbox"][value="BAYONE13179C000"]')
        this.radiobutton=this.page.locator('[id="RdnBillabeyes"]')
        this.radiobutton2=this.page.locator('[id="RdnWorkPlaceCustomer"]')
        this.datepicker=this.page.locator('[id="txtExpiryDate"]')
        this.currentDay=this.page.locator('[class="today active start-date active end-date in-range available"]')
        this.attachment=this.page.locator('[id="btnAttachment"]')
        this.attach=this.page.locator('[id="fileUpload"]')
        this.filetype=this.page.locator('#ddlDocType')
        this.uploadbutton=this.page.locator('#btnUpload')




    }

    public async signin() {
        await this.page.goto(this.url);
        //3. To check Url match
        await expect(this.page).toHaveURL(this.url)
        
        // 4. To check Field is Enabled
        await expect(this.username).toBeEnabled()
        await this.username.fill(data.username)

        // 5. To check fild is not disabled 
        //& Soft assertion
        await expect.soft(this.password).not.toBeDisabled()
        await this.password.fill(data.password)

        // 6. Used Keyboard Enter button
        await this.password.press('Enter')

        // 7. To check wait for the load state
        await this.page.waitForLoadState()
    }
    public async selectCard() {
        //8. using getByRole selector
        await this.card.click()                         
    }

    public async addRequest() {
        //await this.page.pause()
        //9. css selector(#id)
        await this.addbutton.click()       
        //10. placeHolder('text')                        
        await this.licensetype.fill('Public')   
        //11. Dropdown selection using id                 
        await this.itemcategory.selectOption('Subscription')  
        //12. Dropdown selection using CSS   
        await this.itemdescription.selectOption('ANSA')            
        await this.quantity.fill('2')
        //13. page up not working(doubt)
        //await this.page.keyboard.press('PageUp')                
        await this.itemUOM.selectOption('Units')

        //14. for loop using $$ locator
        const dd = await this.page.$$('[class="form-control"]')
        for(const element of dd) {
            const text = await element.textContent()            
            if(text?.trim()==='Please enter AMC')
                {  
                    await element.click()
                    await element.fill('AMC001')

                }
              }


        await this.PID.click()     
        //15. checkbox not to be checked                                 
        await expect(this.checkbox).not.toBeChecked()  
        //16. checkbox click  inside if block         
        await this.checkbox.check()                                 
         if(await this.radiobutton.isChecked)                         
         {
             if(await expect(this.radiobutton2).not.toBeChecked)
                 {
                     await this.radiobutton2.check()
                     console.log('checked')
                 }
         }
         //17. focus
        await this.datepicker.focus() 
        //18. double click                                    
        await this.currentDay.dblclick()  
        //19. Attachment
        await this.attachment.click()
         await this.filetype.selectOption('Invoice')
         const fileInput = this.attach
         await fileInput.setInputFiles('C:/Users/620048/Desktop/BddPlaywright/Testdata/Excel.xlsx')
         await this.uploadbutton.click()
         //20. responsive
         //await this.page.waitForResponse('https://procurementqat.caresoftglobal.com/Request', '200')
         await this.page.pause()
         //visible


         



}

}
