import { BrowserContext, Locator, Page, expect } from "@playwright/test";
export class Login {
    page: Page;
    url: string;
    username: Locator;
    password: Locator;
    loginButton: Locator;
    text: Locator;
    leftmenu: Locator
    menuoption: Locator
    location: Locator
    date: Locator
    draft: Locator
    ok: Locator
    leftmenu2: Locator
    menuoption2: Locator
    search: Locator
    filter: Locator
    dropdown: Locator
    value: Locator
    search2: Locator
    radio: Locator
    op: Locator
    scroll: string
    drag:Locator
    constructor(page: Page) {
        this.page = page;
        this.url = 'https://adaptiveqat.caresoftglobal.com/';
        this.username = this.page.locator('[id="frmLogin"] [id="txtUserID"][name="username"]').nth(0);
        this.password = this.page.locator('[id="frmLogin"] [id="txtPassword"][name="password"]').nth(0);
        this.loginButton = this.page.getByRole('button').filter({ hasText: "SIGN IN" }).nth(0)
        this.text = this.page.getByRole('heading', { name: 'Adaptive Service Management' })
        this.leftmenu = this.page.locator('[name="Customer Page"]')
        this.menuoption = this.page.getByRole('link', { name: 'Create Request' })
        this.location = this.page.locator('[name="Project location"]')
        this.date = this.page.locator('[name="Work Package Expected delivery date"]')
        this.draft = this.page.locator('[id="Draft"]')
        this.ok = this.page.getByRole('button', { name: 'OK' })
        this.leftmenu2 = this.page.locator('[name="Technical Publication"]')
        this.menuoption2 = this.page.locator('[name="Work Assignment"]')
        this.search = this.page.locator('input[name=" Work Package name "]').nth(2)
        this.filter = this.page.getByRole('button', { name: 'Filter ' }).nth(1)
        this.dropdown = this.page.getByRole('textbox', { name: 'Self' })
        this.value = this.page.getByRole('option', { name: 'All' })
        this.search2 = this.page.getByRole('button', { name: ' Search' })
        this.radio = this.page.locator('input[name="Authoring Location"]').nth(3)
        //this.op=this.page.locator('[id="select2-Tpdomain-cd-result-4hia-04A42BCC-863E-4C7E-837C-463778665608"]')
        //this.scroll= this.page.mouse.wheel(0, 600);
        //this.drag=this.page.getByRole('columnheader',{name:'Action'})
        this.drag=this.page.getByText('Action', { exact: true }).first()
    }

    public async login() {

        await this.page.goto(this.url);
        //await this.page.pause()

        //retry assertion
        await expect(this.page).toHaveURL(this.url)
        console.log('passed')
    }

    public async credential() {
        //await this.page.waitForTimeout(5000)
        //await this.page.waitForLoadState('networkidle')
        await this.username.waitFor({ state: 'visible' })

        //non retry assertion
        await expect(this.text).toContainText('Adaptive Service Management Platform')
        console.log('text')

        //soft assertion
        await expect.soft(this.username).toBeEditable()
        console.log('editable')
        await this.username.fill('620048');

        //Negating assertion & Hard Assertion
        await expect.soft(this.password).not.toBeDisabled()
        console.log('not disabled')
        await this.password.fill('Test123@');
        await this.loginButton.click()
        //await this.page.waitForLoadState('networkidle')
        //await this.page.waitForTimeout(9500)

        //await this.page.pause()
        //select left menu
        //await expect(this.leftmenu).toBeEnabled()
        //console.log('button enabled')
        //await this.leftmenu.click()
        //await this.menuoption.click()
        //await this.page.pause()
        //await this.scroll
        // await this.page.mouse.wheel(0, 600);

        const dd = await this.page.$$('[class="form-control  ctl"]')
        for(const element of dd) {
            const text = await element.textContent()            
            if(text?.trim()==='Text Input')
                {  
                    await element.click()
                    await element.fill('success')


        //         }
        //await this.page.pause()

        // await this.page.waitForTimeout(10000)
        // const elements = await this.page.$$('[class="select2-selection select2-selection--single"]'); // Find all matching elements

        // console.log(elements.length)
        // // for (const element of elements) {
        // //     const text = await element.textContent(); // Get the text content of the element
        // //     console.log(text)

        //     // for (i=0, i<elements, i++) {
        //     //     const text = await element.textContent(); // Get the text content of the element
        //     //     console.log(text)
        //     for (let i = 0; i < elements.length; i++) { 
        //             const element = elements[i];
        //             const text = await element.textContent();

        //     if (text === 'Select Project location') {  
        //         console.log('element text'+text)
        //         await element.click();  
        //         break
                
        //     }


        // }

        //await this.page.pause()
        //await this.op.click()

        //add request
        // await this.location.selectOption('Coimbatore')
        // await this.date.fill('07-Aug-2024')
        // await this.draft.click()
        // await this.ok.click()
         await this.leftmenu2.click()
         await this.menuoption2.click()
         await this.drag.click()
        // await this.search.fill('a0030')
        // await this.filter.click()
        // await this.dropdown.click()
        // await this.value.click()
        // await this.search2.click()
        // //await this.radio.focus()
        // await this.radio.check()
        // await this.page.pause()
        // // await this.page.waitForTimeout(3500)
        // // await this.page.waitForSelector('this.radio')
        // // await this.page.waitForFunction()
        // // const [response] = await
        // // await this.page.waitForRequest()
        // // await this.page.waitForResponse('url', '200')
        // // await this.page.waitForLoadState()
    }

}
    }
}