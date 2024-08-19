import { test as base } from 'playwright-bdd'
import { Handson } from '../../src/pages/login-page'
import { Navigate } from '../../src/pages/navigate-page'
import { Viewrequest } from '../../src/pages/viewRequest-page'
import { Addrequest } from '../../src/pages/addRequest-page'

type allClass = {
    login: Handson;
    navi: Navigate;
    viewrequest: Viewrequest;
    addrequest: Addrequest;
}

export const test = base.extend<allClass>
    ({
        login: async ({ page }, use) => { await use(new Handson(page)) },
        navi: async ({ page }, use) => { await use(new Navigate(page)) },
        viewrequest: async ({ page }, use) => { await use(new Viewrequest(page)) },
        addrequest: async ({ page }, use) => { await use(new Addrequest(page)) }
        //Syntax//<object>:async({page}, use)=> {await use(new <className in page>(page))}
    })