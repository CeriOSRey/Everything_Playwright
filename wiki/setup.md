# How to setup Playwright

- Pre-requisites
    - Node JS
    - VS Code Editor
    - Playwright VS Code Plugin

- After installation you can run several commands:
    - npx playwright test 
        - runs end to end tests
    - npx playwright test --project=chromium 
        - runs tests only on Desktop Chrome
    - npx playwright test example.spec.ts
        - runs the test in the specific file
    - npx playwright test --debug
        - runs the test in debug mode

