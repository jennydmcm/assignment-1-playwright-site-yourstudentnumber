import { test, expect } from '@playwright/test';

let urlHome = "http://localhost:3000";
let urlAbout = "http://localhost:3000/about";
let urlContact = "http://localhost:3000/contact";

test.beforeAll(async () => {
    console.log('Before tests');
});
  
test.afterAll(async () => {
    console.log('After tests');
});

test.describe('Header area', () => { 
    test.skip('The title tag', async({ page }) => {
        await page.goto(urlContact)

        await expect(page).toHaveTitle('Contact Us');
    })

    test.skip('The meta tag', async ({ page }) => { 
        // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
        await page.goto(urlContact)
        
        const metaDescriptionOne = page.locator('meta[name="author"]')
        await expect(metaDescriptionOne).toHaveAttribute("content", "MDIA 2109")

        const metaDescriptionTwo = page.locator('meta[property="og:title"]');
        await expect(metaDescriptionTwo).toHaveAttribute('content', 'Assignment #1 - Contact Us Page')

        const metaDescriptionThree = page.locator('meta[property="og:description"]');
        await expect(metaDescriptionThree).toHaveAttribute('content', 'BCIT Digital Design and Development Diploma')
    })

    test.skip('The link tag', async ({ page }) => {
        await page.goto(urlContact)

        const linkTag = page.locator('link[rel="icon"]');
        await expect(linkTag).toHaveAttribute('href', '/favicon.png')
    })
})

test.describe('Main area', () => { 
    test.skip('Header Tags', async({ page }) => {
        await page.goto(urlContact)

        await expect(page.locator('div > h1')).toHaveCount(1);
    })

    test.skip('Count number of paragraphs under content area', async({ page }) => {
        await page.goto(urlContact)

        await expect(page.locator('div > p')).toHaveCount(1);
    })

    test.skip('Count number of forms content area', async({ page }) => {
        await page.goto(urlContact)

        await expect(page.locator('div > form')).toHaveCount(1);
    })

    test.skip('Count fieldsets in form', async({ page }) => {
        await page.goto(urlContact)

        await expect(page.locator('form > fieldset')).toHaveCount(1);
    })

    test.skip('Count table in form', async({ page }) => {
        await page.goto(urlContact)

        await expect(page.locator('form > fieldset > table')).toHaveCount(1);
    })

    test.skip('Count thead in form', async({ page }) => {
        await page.goto(urlContact)

        await expect(page.locator('form > fieldset > table > thead')).toHaveCount(2);
    })

    test.skip('Count tr in first thead', async({ page }) => {
        await page.goto(urlContact)

        await expect(page.locator('form > fieldset > table > thead > tr')).toHaveCount(2);
    })

    test.skip('Submit Button', async({ page }) => { 
        await page.goto(urlContact)

        const firstName = await page.locator('input#firstName');
        const lastName = await page.locator('input#lastName');
        const email = await page.locator('input#email');

    })
})

test.describe('The Arrow Area', () => {
    test('Link tag and navigation', async({ page }) => {
        await page.goto(urlHome)

        await expect(page.locator('a > span > img')).toHaveCount(1);
    })
})