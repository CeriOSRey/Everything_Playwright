import { test, expect } from "../fixtures/pomfixture";
import * as data from '../fixtures/testdata.json';
// No need to import. done in fixtures.
// import RegisterPage from "../pages/registrationPage";
// import LoginPage from "../pages/loginPage";
// import HomePage from "../pages/homepage";
// import SpecialHotPage from "../pages/specialhotpage";

// NO NEED SAVED IN .testdata.json
// const email = 'johndoe@email.com';
// const password = 'johnisdoe';

// MARK: - to run certain test in a certain browser
// test.use({
//     browserName: 'chromium'
// })

test.describe("Buy first special hot item flow.", () => {

    test("Register test_01",async ({page, baseURL, registerPage}) => {
        


        // const register = new RegisterPage(page)  // no need because we used fixture to create an instance
        await page.goto(`${baseURL}route=account/register`)
        await registerPage.enterFirstName(data.firstName)
        await registerPage.enterLasttName(data.lastName)
        await registerPage.enterEmail(data.email)
        await registerPage.enterPhone(data.phone)
        await registerPage.enterPassword(data.password)
        await registerPage.enterConfirmPassword(data.password)
        expect(registerPage.isSubscribed()).toBeTruthy()
        await registerPage.clickTermsAndCondition()
        await registerPage.clickContinueToRegister()
    })
    
    test("Login test_02",async ({page, baseURL, loginPage}) => {
        
        // const login = new LoginPage(page)
        await page.goto(`${baseURL}route=account/login`)
        loginPage.login(data.email, data.password)
        expect(await page.title()).toBe("My Account")
        
    })
    
    test("Add to cart test_03",async ({page, baseURL, loginPage, homePage, specialPage}) => {
    
        // const login = new LoginPage(page)
        // const homePage = new HomePage(page)
        // const special = new SpecialHotPage(page)
        await page.goto(`${baseURL}route=account/login`)
        await loginPage.login(data.email, data.password)
        await homePage.clickOnSpecialHotMenu()
        await specialPage.addFirstProductToCart()
        const isCartVisible = await specialPage.isToastVisible()
        
        expect(isCartVisible).toBeVisible()
        
    })
})