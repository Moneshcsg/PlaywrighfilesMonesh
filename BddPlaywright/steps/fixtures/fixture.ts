import {test as base} from 'playwright-bdd'
import { Login } from '../../src/pages/login-page'
type allClass={
    login:Login;
    

}

export const test=base.extend<allClass>
({
    login:async({page}, use)=> {await use(new Login(page))}

    //Syntax//<object>:async({page}, use)=> {await use(new <className in page>(page))}
})