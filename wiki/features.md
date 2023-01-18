# Features of Playwright

# My Notes:
- headless: true - is default. Must set headless to false in use object inside playwright.config.ts
- can run specific tests using the run button on the left side like iOS test files
- display the status of the test on the right side of the function
- await has no effect on locators if no action is applied.

- adding a "" + before a number turns the type into a string
    - "" + 543   // "543"

- .type vs .fill
    - fill will delete the existing value while type adds to the existing value
    - type will enter each character one at a time while fill will instantly enter the whole string.

- to use id .locator('id=idHere')

- type .only infront of test to run only that test
    - test.only("only run this test", () => {})

- .nth(index) - if you have more than one element with the same id use this and enter the index.
    - page.locator("button:has-text('Click Me')").nth(0).click()  // clicks the first click me button found

- bootstrap modals can be inspected
