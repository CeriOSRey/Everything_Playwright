import test, { expect } from "@playwright/test";


test("Alerts", async ({page}) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')
    page.on("dialog", async (alert) => {
        const text = alert.message()
        console.log(text)
        await alert.accept()
    })
    await page.locator("button:has-text('Click Me')").nth(0).click()

    await page.locator("button:has-text('Click Me')").nth(1).click()
    expect(page.locator('id=confirm-demo')).toContainText('OK!')
})

test("Alert with text field", async ({page}) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')

    // listener of actions inside alerts
    page.on("dialog", async (alert) => {
        const text = alert.defaultValue()
        console.log(text)
        await alert.accept("John")
    })

    await page.locator("button:has-text('Click Me')").nth(2).click() 
    expect(page.locator('id=prompt-demo')).toContainText("'John'")
})

test("Bootstrap modals", async ({page}) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo')
    await page.click("//button[@data-target='#myModal']")
    await page.click("(//button[text()='Save Changes'])[1]")
})

