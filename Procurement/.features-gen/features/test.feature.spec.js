/** Generated from: features\test.feature */
import { test } from "../../steps/fixtures/fixture.ts";

test.describe("Procurement Automation", () => {

  test("requester creating a request", { tag: ["@smoke"] }, async ({ Then, login, And, procure, addrequest, approve }) => {
    await Then("Requesterlogin", null, { login });
    await And("Procurement Selection", null, { procure });
    await And("Add Request", null, { addrequest });
    await And("Approverlogin", null, { login });
    await And("Approve request", null, { approve });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("features\\test.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "requester creating a request": {"pickleLocation":"3:1","tags":["@smoke"]},
};