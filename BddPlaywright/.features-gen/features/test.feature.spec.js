/** Generated from: features\test.feature */
import { test } from "playwright-bdd";

test.describe("Procurement Automation", () => {

  test("Singin scenario", { tag: ["@smoke"] }, async ({  }) => {});

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("features\\test.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Singin scenario": {"pickleLocation":"3:1","tags":["@smoke"]},
};