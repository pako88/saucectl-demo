class SauceDemoPage {

  constructor(page) {
    this.page = page;
  }

  /**
     * Opens Page
     */
  async open() {
    await this.page.goto('https://www.saucedemo.com/');
  }
}

module.exports = SauceDemoPage
