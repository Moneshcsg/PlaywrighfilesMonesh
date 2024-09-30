import { createBdd } from "playwright-bdd";
import { test } from "./fixtures/fixture";
const {Given, When, Then} = createBdd(test)
import {Addrequest} from '../src/pages/addRequest_page'
import {Approver} from '../src/pages/approver_page'
let addRequest: Addrequest;
let approver: Approver;
let extractedValue: string | null;
// Then ('Approve request', async({approve}, extractedValue) => {
//     approver = new Approver(extractedValue);
//     await approver.approver(extractedValue);
    
// })
Then('Approve request', async ({ approve }) => {
    await approve.approver();
    //await pageTwo.useExtractedValue(extractedValue);
});