import test, { Page } from "@playwright/test";


test("Interacting with popup", async function ({page}) {
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo")

    // setup listeners
    const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("//a[contains(text(),'Follow On Twitter')]")
    ])

    console.log(newWindow.url())
})

test.only("Interacting with multiple popup", async function ({page}) {
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo")

    // setup listeners
    const [popups] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("//a[contains(text(),'Follow Twitter & Facebook')]")
    ])

    await page.waitForLoadState()                      // waits until all pages are loaded including popups

    const pages = popups.context().pages()
    console.log('No. of popups: ', pages.length)

    var facebookPage: Page
    pages.forEach(popup => {
        console.log(popup.url())
        if (popup.url() === 'https://www.facebook.com/lambdatest/') {
            facebookPage = popup
        }
    })
})

