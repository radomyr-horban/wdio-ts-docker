import HomePage from '../pageobjects/homePage.js'
import SupportCenterPage from '../pageobjects/supportCenterPage.js'

import supportCenterPage from '../constants/supportCenterPage.json' assert { type: 'json' }

describe('Support Center page', () => {
  beforeEach(async () => {
    await browser.setWindowSize(1920, 1080)
    await browser.url('/')
    await HomePage.closeCookiesBox()
  })

  it('should allow a user to search the website', async function () {
    await HomePage.clickOnResourcesLink()
    await HomePage.clickOnSupportCenterLink()

    await HomePage.switchTab()

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

    const firstSearchResult = await SupportCenterPage.searchResultCards[0]


    await expect(firstSearchResult).toHaveTextContaining([
      supportCenterPage.searchWord,
      supportCenterPage.searchWord.toUpperCase(),
    ])

    await SupportCenterPage.clickOnSearchClearBtn()

    await expect(browser).not.toHaveUrlContaining(supportCenterPage.searchWord)
    await expect(SupportCenterPage.searchInput).toHaveValue('')
  })
})
