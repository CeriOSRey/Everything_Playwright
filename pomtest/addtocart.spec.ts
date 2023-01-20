import test, { expect } from "@playwright/test";
import RegisterPage from "../pages/registrationPage";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homepage";
import SpecialHotPage from "../pages/specialhotpage";

const email = 'johndoe@email.com';
const password = 'johnisdoe';

test.describe("Buy first special hot item flow.", () => {
    test("Register test_01",async ({page, baseURL}) => {
        const register = new RegisterPage(page)
        await page.goto(`${baseURL}route=account/register`)
        await register.enterFirstName('John')
        await register.enterLasttName('Doe')
        await register.enterEmail(email)
        await register.enterPhone('0987654321')
        await register.enterPassword(password)
        await register.enterConfirmPassword(password)
        expect(register.isSubscribed()).toBeTruthy()
        await register.clickTermsAndCondition()
        await register.clickContinueToRegister()
    })
    
    test("Login test_02",async ({page, baseURL}) => {
        
        const login = new LoginPage(page)
        await page.goto(`${baseURL}route=account/login`)
        login.login(email, password)
        expect(await page.title()).toBe("My Account")
        
    })
    
    test("Add to cart test_03",async ({page, baseURL}) => {
    
        const login = new LoginPage(page)
        const homePage = new HomePage(page)
        const special = new SpecialHotPage(page)
        await page.goto(`${baseURL}route=account/login`)
        await login.login(email, password)
        await homePage.clickOnSpecialHotMenu()
        await special.addFirstProductToCart()
        const isCartVisible = await special.isToastVisible()
        
        expect(isCartVisible).toBeVisible()
        
    })
})
    

