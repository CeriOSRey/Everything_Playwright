import test, { expect } from "@playwright/test";


test("Interaction with inputs", async function ({page}) {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const messageInput = page.locator("//input[@id='user-message']")
    console.log(messageInput.getAttribute('placeholder'))
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message")
    console.log(await messageInput.inputValue())

    messageInput.type("Hi Rey")
})

test("Sum", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const sum1input = page.locator('//*[@id="sum1"]')
    const sum2input = page.locator('//*[@id="sum2"]')
    const sumBtn = page.locator('//*[@id="gettotal"]/button')

    await sum1input.type('132')
    await sum2input.type('546')
    await sumBtn.click()
    const result = page.locator('//*[@id="addmessage"]')
    expect(result).toHaveText('678')



})

test("Checkbox", async ({page}) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/checkbox-demo')
    const singleCheckbox = page.locator('id=isAgeSelected')
    expect(singleCheckbox).not.toBeChecked()
})