import test from "@playwright/test";


test("Dropdown", async function({page}) {
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
    await page.selectOption("id=select-demo", {
        label: 'Tuesday',
        // value: 'Tuesday',      // careful with value, it may not be the same as label.
        // index: 1,
    })
    await page.selectOption('id=multi-select', [
        {label: 'California'},
        {label: 'Ohio'}
    ])
    await page.waitForTimeout(3000)
})

test.only("Bootstrap Dropdown",async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo")
    await page.click('#country+span')
    await selectCountry("India")
    await page.click('#country+span')
    await selectCountry("Denmark")
    await page.click('#country+span')
    await selectCountry("South Africa")
    await page.click('#country+span')
    await selectCountry("Hong Kong")


    async function selectCountry(countryName) {
        await page.locator("ul#select2-country-results") // locator for ul
            .locator("li", {
                hasText: countryName
            }).click();
        await page.waitForTimeout(3000);
    }
})