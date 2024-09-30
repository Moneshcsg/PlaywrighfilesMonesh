import { createBdd } from "playwright-bdd";
import { test } from "./fixtures/fixture";
const {Given, When, Then} = createBdd(test)

Then ('Procurement Selection', async({procure}) =>
{
    await procure.procurementselect_software()
})