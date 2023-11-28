import HomePage from '../pageobjects/homePage.js'
import SupportCenterPage from '../pageobjects/supportCenterPage.js'

import supportCenterPage from '../constants/supportCenterPage.json' assert { type: 'json' }

describe('Support Center page', () => {
  beforeEach(async () => {
    await browser.setWindowSize(1920, 1080)
    await browser.url('/')
    await HomePage.closeCookiesBox()
  })
  afterEach(async () => {
    await browser.reloadSession()
  })

  it('should find results for a valid sarch value', async function () {
    await HomePage.clickOnResourcesLink()
    await HomePage.clickOnSupportCenterLink()

    await HomePage.switchTab(1)

    await expect(browser).toHaveUrlContaining('support')
    await expect(SupportCenterPage.heading).toBeDisplayed()

    await SupportCenterPage.clickOnSearchInput()
    await expect(SupportCenterPage.searchInput).toBeFocused()

    await SupportCenterPage.setSearchInput(supportCenterPage.searchWord)
    await expect(SupportCenterPage.searchInput).toHaveValue(supportCenterPage.searchWord)

    await browser.keys('Enter')
    await expect(browser).toHaveUrlContaining(supportCenterPage.searchWord)

    await expect(SupportCenterPage.searchResultsText).toHaveTextContaining(supportCenterPage.searchWord)
    await expect(SupportCenterPage.searchInput).toHaveValue(supportCenterPage.searchWord)
    expect((await SupportCenterPage.searchResultCards.length) > 0).toBe(true)

    const firstSearchResult = await SupportCenterPage.searchResultCards[0]

    await expect(firstSearchResult).toHaveTextContaining([
      supportCenterPage.searchWord,
      supportCenterPage.searchWord.toUpperCase(),
    ])

    await SupportCenterPage.clickOnSearchClearBtn()
    await expect(browser).not.toHaveUrlContaining(supportCenterPage.searchWord)
    await expect(SupportCenterPage.searchInput).toHaveValue('')
  })

  it('should NOT find results for an invalid sarch value', async function () {
    await HomePage.clickOnResourcesLink()
    await HomePage.clickOnSupportCenterLink()

    await HomePage.switchTab(1)

    await expect(browser).toHaveUrlContaining('support')
    await expect(SupportCenterPage.heading).toBeDisplayed()

    await SupportCenterPage.clickOnSearchInput()
    await expect(SupportCenterPage.searchInput).toBeFocused()

    await SupportCenterPage.setSearchInput(supportCenterPage.invalidSearchWord)
    await expect(SupportCenterPage.searchInput).toHaveValue(supportCenterPage.invalidSearchWord)
    await browser.keys('Enter')

    await expect(browser).toHaveUrlContaining(supportCenterPage.invalidSearchWord)
    await expect(SupportCenterPage.searchResultsText).toHaveTextContaining(supportCenterPage.invalidSearchWord)
    await expect(SupportCenterPage.searchInput).toHaveValue(supportCenterPage.invalidSearchWord)
    expect((await SupportCenterPage.searchResultCards.length) > 0).toBe(false)

    await SupportCenterPage.clickOnSearchClearBtn()
    await expect(browser).not.toHaveUrlContaining(supportCenterPage.invalidSearchWord)
    await expect(SupportCenterPage.searchInput).toHaveValue('')
  })
})
