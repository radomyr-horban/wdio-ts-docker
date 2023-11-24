import HomePage from '../pageobjects/homePage.js'
import NumbersPricingPage from '../pageobjects/numbersPricingPage.js'

describe('Numbers Pricing page', () => {
  beforeEach(async () => {
    await browser.setWindowSize(1920, 1080)
    await browser.url('/')
    await HomePage.closeCookiesBox()
  })

  it('should allow a user to use filters', async () => {
    await HomePage.clickOnPricingLink()
    await HomePage.clickOnPricingGlobalNumbersLink()

    await expect(browser).toHaveUrlContaining('/pricing/numbers')
    await expect(NumbersPricingPage.heading).toHaveText('Numbers pricing')
    await expect(NumbersPricingPage.heroOverviewText).toHaveText(
      'Get flexible pricing for Local, National and Toll-free Numbers, with the option to pay as you go or volume-based pricing.'
    )

    await expect(NumbersPricingPage.volumeBasedPricingBoxLink).toBeDisplayed()

    await expect(NumbersPricingPage.numberPricingTableCaption).toBeDisplayed()
    await expect(NumbersPricingPage.numberPricingTableData).toHaveTextContaining('$')

    await NumbersPricingPage.clickOnPayAsYouGoBoxLink()
    await expect(browser).toHaveUrlContaining('#pay-as-you-go')

    await NumbersPricingPage.clickOnCountryFilterDropdownBtn()
    await expect(NumbersPricingPage.countryFilterDropdownList).toBeDisplayed()

    await NumbersPricingPage.selectCountryOption('Canada')
    await expect(browser).toHaveUrlContaining('/ca')
    await expect(NumbersPricingPage.heading).toHaveTextContaining('Canada')
    await expect(NumbersPricingPage.countryFilterDropdownBtn).toHaveText('Canada')

    await NumbersPricingPage.clickOnCurrencyFilterDropdownBtn()
    await expect(NumbersPricingPage.currencyFilterDropdownList).toBeDisplayed()

    await NumbersPricingPage.selectCurrencyOption('EUR')
    await expect(NumbersPricingPage.numberPricingTableData).toHaveTextContaining('€')
    await expect(NumbersPricingPage.currencyFilterDropdownBtn).toHaveText('EUR')
  })
})
