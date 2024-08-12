import { createBdd } from "playwright-bdd";
import { test } from './fixtures/fixture.ts';
const{Given, When, Then} = createBdd(test)

Then('Login', async ({ login }) => {

    await login.login()
    await login.selectCard()
    await login.addRequest()


})