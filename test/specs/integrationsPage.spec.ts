import HomePage from '../pageobjects/homePage.js'
import IntegrationsPage from '../pageobjects/integrationsPage.js'

import integrationsPage from '../constants/integrationsPage.json' assert { type: 'json' }

console.log(integrationsPage.Categories.All)

describe('Integrations page', () => {
  beforeEach(async () => {
    await browser.url('/')
    await HomePage.closeCookiesBox()
  })

  it('should allow a user to use filters', async () => {
    await HomePage.clickOnWhyTelnyxLink()
    await HomePage.clickOnIntegrationsLink()

    const tabs = await browser.getWindowHandles()
    console.log(tabs)
    await browser.switchToWindow(tabs[1])
    await expect(browser).toHaveUrlContaining('marketplace')

    await expect(IntegrationsPage.heading).toBeDisplayed()
    await expect(IntegrationsPage.heading).toHaveText('Welcome to the Telnyx Integration Marketplace')
    await expect(IntegrationsPage.heroOverviewText).toBeDisplayed()
    await expect(IntegrationsPage.heroOverviewText).toHaveText('Add Telnyx products to your favorite software')

    await expect(IntegrationsPage.integrationsSectionTitle).toBeDisplayed()
    await expect(IntegrationsPage.integrationsSectionTitle).toHaveText('Integrations')
    await expect(IntegrationsPage.categoriesSectionTitle).toBeDisplayed()
    await expect(IntegrationsPage.categoriesSectionTitle).toHaveText('Categories')

    expect(
      IntegrationsPage.verifyListItemsTitles(
        await IntegrationsPage.integrationsSectionListItems,
        integrationsPage.Integrations
      )
    )
    expect(
      IntegrationsPage.verifyListItemsTitles(
        await IntegrationsPage.categoriesSectionListItems,
        integrationsPage.Categories
      )
    )
    expect(
      IntegrationsPage.verifyListItemsHrefs(
        await IntegrationsPage.integrationsSectionListItems,
        integrationsPage.Integrations
      )
    )
    expect(
      IntegrationsPage.verifyListItemsHrefs(
        await IntegrationsPage.categoriesSectionListItems,
        integrationsPage.Categories
      )
    )
  })
})
