import HomePage from '../pageobjects/homePage.js'
import GlobalCoveragePage from '../pageobjects/globalCoveragePage.js'
import ThankYouPage from '../pageobjects/thankYouPage.js'

describe('Global coverage page', () => {
  beforeEach(async () => {
    await browser.url('/')
    await HomePage.closeCookiesBox()
  })

  it('11. should allow a user to submit a form with valid data', async () => {
    await HomePage.clickOnWhyTelnyxLink()
    await HomePage.clickOnGlobalCoverageLink()

    await expect(browser).toHaveUrlContaining('/global-coverage')
    await expect(GlobalCoveragePage.heading).toBeDisplayed()
    await expect(GlobalCoveragePage.heading).toHaveText('Global coverage')
    await expect(GlobalCoveragePage.heroOverviewText).toBeDisplayed()
    await expect(GlobalCoveragePage.viewFullCoverageLink).toBeDisplayed()
    await expect(GlobalCoveragePage.fullCoverageForm).toBeDisplayed()

    const userData = await HomePage.generateUserData()
    await GlobalCoveragePage.fillForm(userData)

    await expect(browser).toHaveUrlContaining('/thank-you?formId')
    await expect(ThankYouPage.heading).toBeDisplayed()
    await expect(ThankYouPage.heroOverviewText).toBeDisplayed()
  })

  it('12. should NOT allow a user to submit a form with invalid data', async () => {
    await HomePage.clickOnWhyTelnyxLink()
    await HomePage.clickOnGlobalCoverageLink()

    await expect(browser).toHaveUrlContaining('/global-coverage')
    await expect(GlobalCoveragePage.heading).toBeDisplayed()
    await expect(GlobalCoveragePage.heading).toHaveText('Global coverage')
    await expect(GlobalCoveragePage.heroOverviewText).toBeDisplayed()
    await expect(GlobalCoveragePage.viewFullCoverageLink).toBeDisplayed()
    await expect(GlobalCoveragePage.fullCoverageForm).toBeDisplayed()

    await GlobalCoveragePage.submitBtn.click()
    await expect(await GlobalCoveragePage.isErrorAlertDisplayed(await GlobalCoveragePage.firstNameInput))

    await GlobalCoveragePage.firstNameInput.setValue('Tom')
    await GlobalCoveragePage.submitBtn.click()
    await expect(await GlobalCoveragePage.isErrorAlertDisplayed(await GlobalCoveragePage.lastNameInput))

    await GlobalCoveragePage.lastNameInput.setValue('Holland')
    await GlobalCoveragePage.submitBtn.click()
    await expect(await GlobalCoveragePage.isErrorAlertDisplayed(await GlobalCoveragePage.emailInput))

    await GlobalCoveragePage.emailInput.setValue('tom.holland')
    await GlobalCoveragePage.submitBtn.click()
    await expect(await GlobalCoveragePage.isErrorAlertDisplayed(await GlobalCoveragePage.emailInput))

    await GlobalCoveragePage.emailInput.setValue('tom@holland')
    await GlobalCoveragePage.submitBtn.click()
    await expect(await GlobalCoveragePage.isErrorAlertDisplayed(await GlobalCoveragePage.emailInput))
  })
})
