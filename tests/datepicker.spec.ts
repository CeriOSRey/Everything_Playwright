import test from "@playwright/test";
import moment from "moment"


test("Handling calendar",async ({page}) => {
    page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo')
    const date = '1994-04-12'
    await page.fill('id=birthday', date)
    await page.waitForTimeout(3000)
})

test("Calendar demo using moment", async ({page}) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo')

    await page.click('//*[@id="datepicker"]/input[1]')
    await newFunction(12, 'December 2017');

    await page.waitForTimeout(5000)

    async function newFunction(day:number, monthYear: string) {
        const mmYY = page.locator("(//th[@class='datepicker-switch'])[1]");
        const prev = page.locator("(//th[@class='prev'])[1]");
        const next = page.locator("(//th[@class='next'])[1]");


        // Using moment library
        const thisMonth = moment(monthYear, "MMMM YYYY").isBefore();
        console.log(thisMonth);

        while (await mmYY.textContent() !== monthYear) {
            if (thisMonth) {
                await prev.click();
            } else {
                await next.click();
            }
        }

        const dayTwenty = await page.locator(`//td[@class='day'][text()='${day}']`);
        dayTwenty.click();
    }
})