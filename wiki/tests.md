# Writing your first test

Demo project is based on https://ecommerce-playground.lambdatest.io/
credentials { John Doe 18887859999 ceriorey@email.com password }

- Run your test
    - no need to specify what type of locators.
    - context is a whole new session
    - enter 'testMatch' property in config object inside playwright.config.ts
    - if testMatch is disabled, you can run specific tests from Testing extension on the left.
    - testMatch takes in an array [], you can list your different tests files inside.
    - npx playwright test is the command
    - defaults to headless -> to run non-headless add headless property inside browser 
        - ie. const browser = await chromium.launch({headless:false})
    - retries property in config retries the FAILED test depending on the value
        - retries: 4
