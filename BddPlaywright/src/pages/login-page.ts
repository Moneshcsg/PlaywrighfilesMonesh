import { BrowserContext, Locator, Page, expect } from "@playwright/test";

export class Login {
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
        this.url = 'https://procurementqat.caresoftglobal.com/';
        this.username = this.page.locator('[name="username"]')
        this.password = this.page.locator('[id="txtPassword"]')
        this.card = this.page.getByRole('heading', { name: 'Software' })
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

    public async login() 
    {
        await this.page.waitForTimeout(5000)            //wait for timeout
        await this.page.goto(this.url);
        await expect(this.page).toHaveURL(this.url)     //retry assertion
        console.log('Url Matched')
        await this.page.waitForSelector('this.username')    //wait for selector
        await expect(this.username).toBeEnabled()       //enabled
        await this.username.fill('101479')              // locator('[name]')
        await expect(this.password).not.toBeDisabled()  //not disabled
        await this.password.fill('Mummy@162')           // locator('[id]')
        await this.password.press('Enter')              // Keyboard Enter
        await this.page.waitForLoadState('networkidle') // wait for load state
    }

    public async selectCard() {
        await this.card.click()                         //getbyRole(role and name)
    }

    public async addRequest() {
        await this.addbutton.click()                               //css selector(#id)
        await this.licensetype.fill('Public')                    //placeHolder('text')
        await this.itemcategory.selectOption('Subscription')     //Dropdown selection using id
        await this.itemdescription.selectOption('ANSA')            //Dropdown selection using CSS
        await this.quantity.fill('2')
        //await this.page.keyboard.press('PageUp')                //--> page up not working(doubt)
        await this.itemUOM.selectOption('Units')
        await this.PID.click()                                      
        await expect(this.checkbox).not.toBeChecked()               //checkbox not to be checked
        await this.checkbox.check()                                 //checkbox click
         if(await this.radiobutton.isChecked)                          //if inside if
         {
             if(await expect(this.radiobutton2).not.toBeChecked)
                 {
                     await this.radiobutton2.check()
                     console.log('checked')
                 }
         }
        await this.datepicker.focus()                                     //focus
        await this.currentDay.dblclick()                                  //double click
        //const datePickerCells = await this.page.$$('.calendar-day')
        //const numberOfCells = datePickerCells.length;
        //console.log(numberOfCells)
        //const today = new Date();                                        //doubt
        //const currentDay = today.getDate();
        //for(let i=1; i==currentDay; i++)                    
        // {
        //     if(i==currentDay)
        //     {
        //         await this.page.locator('cell', {name:'i'})
        //     }
        // }
        // console.log(currentDay)
        // const cells = await this.page.$$('.calendar-day');
        // for (let i = 0; i < cells.length; i++) {
        //     const cellText = await cells[i].innerText(); // Get text of each cell
        //     if (parseInt(cellText, 10) === currentDay) {
        //       await cells[i].click();
        //     }}
        
        // const handle = this.attachment
         
         await this.attachment.click()
         await this.filetype.selectOption('Invoice')
         const fileInput = this.attach
         //await this.attach.click()
         await fileInput.setInputFiles('C:/Users/620048/Desktop/BddPlaywright/Testdata/Excel.xlsx')
         await this.uploadbutton.click()
         await this.page.pause()

        // await handle.setInputFiles('C:/Users/620048/Desktop/BddPlaywright/Testdata/Excel.xlsx')     // doubts
        // await this.page.setInputFiles('C:/Users/620048/Desktop/BddPlaywright/Testdata/Excel.xlsx')  // doubts
        
        }
    
}







