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
    await (await this.searchInput).waitForDisplayed()
    await (await this.searchInput).click()
  }

  public async clickOnSearchClearBtn() {
    await (await this.searchClearBtn).waitForDisplayed()
    await (await this.searchClearBtn).click()
  }

  public async setSearchInput(value: string) {
    await (await this.searchInput).setValue(value)
  }
}

export default new SupportCenterPage()
