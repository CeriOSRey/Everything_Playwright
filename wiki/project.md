# Starting a Project

- Collect requirements from QA or PM.




# Writing up the tests POM architecture
- start with Locators based on pages
    - write element getter functions
    - include error handlers for null returns
    - F8 to pause your DOM (to get toast element etc.)

- write the actions/methods functions inside a class
    - naming conventions of class is using the page name. ie. LoginPage
    - access the locators
    - all functions should be async/await

- write the test by accessing the action class
    - toast verification
    - assertions
    - 

- write a common file containing reusable variables ie. test URLs
