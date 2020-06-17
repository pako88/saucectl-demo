const SauceDemoPage = require('../src/saucedemo.page');

describe('saucectl demo test', () => {
	test('should verify title of the page', async () => {
    const page = (await browser.pages())[0]
    const sauceDemoPage = new SauceDemoPage(page);
		await sauceDemoPage.open();
		expect(await page.title()).toBe('Swag Labs');
	});
});
