import Page from './page.js'

class SupportCenterPage extends Page {
  public get heading() {
    return $('header h1')
  }

  public get searchInput() {
    return $('form input')
  }

  public get searchClearBtn() {
    return $('a[data-testid="search-clear-button"] > svg')
  }

  public get searchResultsText() {
    return $('.section__content')
  }

  public get searchResultCards() {
    return $$('a[class*="group/search-card"]')
  }

  public async clickOnSearchInput() {
    // await (await this.searchInput).waitForDisplayed()
    // await (await this.searchInput).click()

    await super.clickElement(await this.searchInput)
  }

  public async clickOnSearchClearBtn() {
    // await (await this.searchClearBtn).waitForDisplayed()
    // await (await this.searchClearBtn).click()

    await super.clickElement(await this.searchClearBtn)
  }

  public async setSearchInput(value: string) {
    // await (await this.searchInput).setValue(value)

    await super.setInputValue(await this.searchInput, value)
  }
}

export default new SupportCenterPage()
