import {chromium, test} from "@playwright/test";
import { capabilities } from "./capabilities";

// traditional way using Playwright Library
test('Login test demo', async function() {

    const baseUrl = 'https://ecommerce-playground.Lambdatest.io/'
    // we use chromium.connect for LambdaTest
    // const browser = await  chromium.launch({
    //     headless: false
    // })

    const browser = await chromium.connect(`wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`)

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto(baseUrl)
    await page.hover('//*[@id="widget-navbar-217834"]/ul/li[6]/a')
    await page.click('text=Login') // also equals await page.click("'login'")
    
    // login
    await page.fill('#input-email', 'johndoe@email.com')
    await page.fill('#input-password', 'password')
    await page.click('//*[@id="content"]/div/div[2]/div/div/form/input[1]')

    await page.close()
    await context.close()
    await browser.close()



    // await page.waitForTimeout(5000)

    // // does not carry over the cached login token. newContext will fire up a whole new session and nothing cached.
    // const newContext = await browser.newContext()

    // // opening a new tab with cached login token
    // const page1 = await context.newPage()
    // await page1.goto(`${baseUrl}/index.php?reoute=account/login`)
    // await page.waitForTimeout(5000)
    // await browser.close()
})