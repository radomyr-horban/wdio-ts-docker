import HomePage from '../pageobjects/homePage.js'
import ReleaseNotesPage from '../pageobjects/releaseNotesPage.js'

import releaseNotesPage from '../constants/releaseNotesPage.json' assert { type: 'json' }

describe('Release Notes page', () => {
  beforeEach(async () => {
    await browser.setWindowSize(1920, 1080)

    await browser.url('/')
    await HomePage.closeCookiesBox()
  })

  it('should allow a user to filter notes', async () => {
    await HomePage.clickOnReleaseNotesLink()

    await expect(browser).toHaveUrlContaining('/release-notes')
    await expect(ReleaseNotesPage.heading).toBeDisplayed()
    await expect(ReleaseNotesPage.heading).toHaveText('Release notes')
    await expect(ReleaseNotesPage.featureRequestLink).toBeDisplayed()
    await expect(ReleaseNotesPage.followUsOnTwitterLink).toBeDisplayed()

    await ReleaseNotesPage.clickOnFilterDropdown()
    await expect(ReleaseNotesPage.filterDropdownList).toBeDisplayed()

    //!error

    await (await ReleaseNotesPage.filterDropdown).scrollIntoView()

    await ReleaseNotesPage.verifyListItemsWithTitlesArray(
      await ReleaseNotesPage.filterDropdownListOptions,
      releaseNotesPage.productOptions
    )

    await ReleaseNotesPage.selectProductOption('API')

    await expect(browser).toHaveUrlContaining('/tag/api')
  })

  it('should display pagination', async () => {
    await HomePage.clickOnReleaseNotesLink()

    await expect(browser).toHaveUrlContaining('/release-notes')
    await expect(ReleaseNotesPage.heading).toBeDisplayed()
    await expect(ReleaseNotesPage.heading).toHaveText('Release notes')
    await expect(ReleaseNotesPage.featureRequestLink).toBeDisplayed()
    await expect(ReleaseNotesPage.followUsOnTwitterLink).toBeDisplayed()
    await expect(ReleaseNotesPage.paginationNav).toBeDisplayed()

    await expect(ReleaseNotesPage.currentPageNumber).toHaveTextContaining('1')

    await ReleaseNotesPage.clickOnNextPageLink()
    await expect(browser).toHaveUrlContaining('/page/2')
    await expect(ReleaseNotesPage.currentPageNumber).toHaveTextContaining('2')

    await ReleaseNotesPage.clickOnPreviousPageLink()
    await expect(browser).toHaveUrlContaining('/page/1')
    await expect(ReleaseNotesPage.currentPageNumber).toHaveTextContaining('1')
  })
})
