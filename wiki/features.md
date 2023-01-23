# Features of Playwright

# My Notes:
- headless: true - is default. Must set headless to false in use object inside playwright.config.ts
- can run specific tests using the run button on the left side like iOS test files
- display the status of the test on the right side of the function
- await has no effect on locators if no action is applied.
- playwright by default will check if an element is enabled or not.

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

- browsers will automatically .quit() after every test

- CTRL - F to bring up the search for elements, search bar. 

- CTRL - J to pull up the terminal

- downloaded files by Playwright are deleted as soon as the browser context that produced them are closed.

- w/in the class, you dont need to use the function keyword to declare a function because its a method.

- F8 to pause your DOMs in browser and mouse-over popups wont disappear.

- CTRL . for quickfix

- by default Playwright runner will open and close the browser. No need to handle that in beforeEach and afterEach.

- handling JSON in Typescript is
    - import it with alias and you can access the properties
    - import * as userdata from "../data/userdata.json"
    - userdata.firstname