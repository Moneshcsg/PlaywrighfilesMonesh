import{test as base} from 'playwright-bdd'
import { Login } from "../../src/pages/login_page";
import { ProcurementSelect } from '../../src/pages/procurementSelect_page';
import { Addrequest } from '../../src/pages/addRequest_page';
import { Approver } from '../../src/pages/approver_page';


type allMyClasses={

    login: Login
    procure: ProcurementSelect
    addrequest: Addrequest
    approve: Approver
    
    
}

export const test = base.extend<allMyClasses>
({
    login: async({page},use) => {await use (new Login(page))},
    procure: async({page},use) => {await use (new ProcurementSelect(page))},
    addrequest: async({page}, use) => {await use ( new Addrequest(page))},
    //login: async({page},use) => {await use (new Login(page))}
    approve: async({page}, use) => {await use ( new Approver(page))},

})