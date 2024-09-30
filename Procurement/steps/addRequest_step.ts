import { createBdd } from "playwright-bdd";
import { test } from "./fixtures/fixture";
const {Given, When, Then} = createBdd(test)

Then ('Add Request', async({addrequest}) => {

    await addrequest.addrequest()
})