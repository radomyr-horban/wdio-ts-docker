import Page from './page.js'

class NumbersPricingPage extends Page {
  public get heading() {
    return $('main h1')
  }

  public get heroOverviewText() {
    return $('section[contenttype="heroOverview"] > div > div > p')
  }

  public get payAsYouGoBoxLink() {
    return $('a[title="Pay as you go - see plan"]')
  }

  public get volumeBasedPricingBoxLink() {
    return $('a[title="See plan for Volume based pricing"]')
  }

  public get countryFilterDropdownBtn() {
    return $('button[id="country-filter"]')
  }

  public get currencyFilterDropdownBtn() {
    return $('button[id="currency-filter"]')
  }

  public get countryFilterDropdownList() {
    return $('button[id="country-filter"]+div')
  }

  public get currencyFilterDropdownList() {
    return $('button[id="currency-filter"]+div')
  }

  public get numberPricingTableCaption() {
    return $('table[id="Number-pricing"] > caption')
  }

  public get numberPricingTableData() {
    return $$('table[id="Number-pricing"] td')
  }

  async clickOnPayAsYouGoBoxLink() {
    await (await this.payAsYouGoBoxLink).waitForDisplayed()
    await (await this.payAsYouGoBoxLink).click()
  }

  async clickOnCountryFilterDropdownBtn() {
    await (await this.countryFilterDropdownBtn).waitForDisplayed()
    await (await this.countryFilterDropdownBtn).click()
  }

  async clickOnCurrencyFilterDropdownBtn() {
    await (await this.currencyFilterDropdownBtn).waitForDisplayed()
    await (await this.currencyFilterDropdownBtn).click()
  }

  async selectCountryOption(value: string) {
    const countryOption = await $(`//span[@id="radix-:r3k:" and text()='${value}']`)
    await this.clickElement(countryOption)
  }

  async selectCurrencyOption(value: string) {
    const currencyOption = await $(`//span[@id="radix-:re9:" and text()='${value}']`)
    await this.clickElement(currencyOption)
  }
}

export default new NumbersPricingPage()
