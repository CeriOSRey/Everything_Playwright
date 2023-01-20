import { test } from "@playwright/test"

test("Download files", async({page}) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo')
    await page.type('id=textbox', 'like, share, comment & subscribe.')
    await page.click('id=create')

    //generating a file returns a promise
    // dont destructure so you can use array logic and get the .suggestedFiledname()
    const download = await Promise.all([
        page.waitForEvent('download'),
        page.click('id=link-to-download')

    ])
    // use this to save it w/in the project folder for verification
    const fileName = download[0].suggestedFilename()
    await download[0].saveAs(fileName)

    // BELOW will save it to a temp folder and will get deleted
    // const path = await download.path();
    // console.log(path)
    // await download[0]
})