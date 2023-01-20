import { test as myTest } from "@playwright/test"

type john = {
    age: number,
    email: string
}

const myFixtureTest = myTest.extend<john>({
    age: 27,
    email: 'johndoe@email.com'
})

export const test = myFixtureTest