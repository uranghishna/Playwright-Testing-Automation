import {chromium} from "playwright";
describe('Launch Browser', () => {
    
    test('Open Halahpedia', async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto('https://halalpedia.com/')
        await page.click("text=Masuk / Daftar")
        await page.fill("input[name='username']", 'hishna.di@gmail.com');
        await page.fill("input[name='password']", 'hishnadi25.');
        await page.keyboard.press('Enter', {delay:2000})
        await browser.close()
    })
})