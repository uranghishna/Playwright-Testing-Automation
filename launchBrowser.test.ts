import {chromium} from "playwright";
describe('Launch Browser', () => {
    
    test('Open Halahpedia', async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto('https://halalpedia.com/')
        await browser.close()
    })
})