
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})
//My 2 tests
test('Draws random bot cards',async () => {
    await driver.findElement(By.id('draw')).click()
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})

test('Added bots to duo pick',async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.className('bot-btn')).click()
    const picked = await driver.findElement(By.id('player-duo'))
    const displayed = await picked.isDisplayed()
    expect(displayed).toBe(true)
})

//Might come back to add remove list
// test('Removed bots form duo list',async () => {
//     await driver.findElement(By.id('draw')).click()
//     await driver.findElement(By.className('bot-btn')).click()
//     const choices = await driver.findElement(By.id('choices'))
//     const displayed = await choices.isDisplayed()
//     expect(displayed).toBe(true)
// })