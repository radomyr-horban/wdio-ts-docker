import HomePage from '../pageobjects/homePage.js'
import SolutionsPage from '../pageobjects/solutionsPage.js'

import solutionsPage from '../constants/solutionsPage.json' assert { type: 'json' }

describe('Solutions page', () => {
  beforeEach(async () => {
    await browser.setWindowSize(1920, 1080)
    await browser.url('/')
    await HomePage.closeCookiesBox()
  })

  it('should allow a user to filter departments', async () => {
    await HomePage.clickOnSolutionsLink()

    await expect(browser).toHaveUrlContaining('/solutions')
    await expect(SolutionsPage.heading).toHaveTextContaining('Solutions for scaling your business')
    await expect(SolutionsPage.heroOverviewText).toHaveTextContaining(
      'Learn how Telnyx products apply to your industry or use case.'
    )
    await expect(SolutionsPage.seeIndustriesLink).toBeDisplayed()

    await SolutionsPage.clickOnSeeUseCasesLink()
    await expect(browser).toHaveUrlContaining('#use-cases')

    await expect(SolutionsPage.useCasesSectionStrongText).toHaveTextContaining('USE CASES')

    await expect(SolutionsPage.useCasesSectionHeading).toHaveTextContaining(
      'Maintain control with custom, feature-rich tooling.'
    )

    await (await SolutionsPage.filterDropdownBtn).scrollIntoView()

    await SolutionsPage.clickOnFilterDropdownBtn()
    await expect(SolutionsPage.filterDropdownList).toBeDisplayed()

    await SolutionsPage.verifyListItemsWithTitlesArray(
      await SolutionsPage.filterDropdownListOptions,
      solutionsPage.options
    )
  })
})
