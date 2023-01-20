import { Page } from "@playwright/test"

export default class LoginPage {

    constructor(public page: Page) {}

    async login(email:string, password:string) {
        await this.enterLoginEmail(email)
        await this.enterLoginPassword(password)
        await this.clickLoginBtn()
    }

    async enterLoginEmail(email: string) {
        await this.page.locator('#input[name="email"]').type(email)
    }

    async enterLoginPassword(password: string) {
        await this.page.locator('#input[name="password"]').type(password)
    }

    async clickLoginBtn() {
        await Promise.all([
            this.page.waitForNavigation({waitUntil: 'networkidle'}),    // this setup waits for page to load
            await this.page.click('input[value="Login"]')
        ])
    }
}