import { test } from "@playwright/test"

test.only("Upload file",async ({page}) => {
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/')
    // there is always a 'input[type='file'] element
    await page.setInputFiles("input[type='file']", ["uploadItems/apple.png", "uploadItems/mango.png"])

    // rare cases where there is no input[type='file'] element.
    const [uploadFiles] = await Promise.all([
        page.waitForEvent('filechooser'),  // wait for the file chooser popup event
        page.click('input[type="file"]')    // pretend that the locator isnt input[type='file'].
    ])
    const isMultiple = uploadFiles.isMultiple()  // return true if it supports multiple files upload
    
    uploadFiles.setFiles(["uploadItems/apple.png", "uploadItems/mango.png"])

    await page.waitForTimeout(5000)
})