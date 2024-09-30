import { createBdd } from "playwright-bdd";
import { test } from "./fixtures/fixture";
//import { Login } from "../src/pages/login_page";
const {Given, Then, When} = createBdd(test)

Then('Requesterlogin', async({login}) => {

    await login.login_requestor()
})

Then('Approverlogin', async({login}) => {

    await login.login_approver()
})

