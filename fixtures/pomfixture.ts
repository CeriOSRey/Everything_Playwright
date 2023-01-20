import { chromium, test as baseTest } from "@playwright/test"
import RegisterPage from "../pages/registrationPage";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homepage";
import SpecialHotPage from "../pages/specialhotpage";
import { capabilities } from "../crossbrowser/capabilities";



type pages = {
    registerPage: RegisterPage
    loginPage: LoginPage
    homePage: HomePage
    specialPage: SpecialHotPage
}

const testPages = baseTest.extend<pages>({
    // overriding page for Lambdatest
    page:async ({}, use ) => {
        const browser = await chromium.connect(`wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`)
        const context = await browser.newContext()
        const ltPage = await context.newPage()
        await use (ltPage)
        await ltPage.close()
        await context.close()
        await browser.close()
    },


    registerPage: async({page}, use) => {
        await use(new RegisterPage(page))
    },

    loginPage: async({page}, use) => {
        await use(new LoginPage(page))
    },

    homePage: async({page}, use) => {
        await use(new HomePage(page))
    },

    specialPage: async({page}, use) => {
        await use(new SpecialHotPage(page))
    },
    
})

export const test = testPages
export const expect = testPages.expect