import test, { expect } from "@playwright/test";


test("Interact with frames",async ({page}) => {
    await page.goto('https://letcode.in/frame')
    const allFrames = page.frames();
    console.log("No. of frames " + allFrames.length)

    const firstFrame = page.frame('firstFr')
    await firstFrame?.fill("//input[@name='fname']", "John")
    await firstFrame?.fill("//input[@name='lname']", "Doe")

    let label = firstFrame?.locator("//p[@class='title has-text-info']").textContent()
    expect(label).toContain('john doe')
    await page.waitForTimeout(3000)
})

test("Alternative way to interact with frames",async ({page}) => {
    await page.goto('https://letcode.in/frame')
    const allFrames = page.frames();
    console.log("No. of frames " + allFrames.length)

    const firstFrame = page.frameLocator("#firstFr")
    await firstFrame.locator("//input[@name='fname']").fill("John")
    await firstFrame.locator("//input[@name='lname']").fill("Doe")

    const innerFrame = firstFrame.frameLocator("//iframe[@src='innerFrame']")
    await innerFrame.locator("input[name='email']").fill('johndoe@email.com')
})