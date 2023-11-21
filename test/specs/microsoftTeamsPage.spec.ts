import HomePage from '../pageobjects/homePage.js'
import MicrosoftTeamsPage from '../pageobjects/microsoftTeamsPage.js'
import ThankYouPage from '../pageobjects/thankYouPage.js'

describe('Microsoft Teams page', () => {
  beforeEach(async () => {
    await browser.maximizeWindow()
    await browser.url('/')
    // await acceptCookiesHelper()
    await HomePage.closeCookiesBox()
  })

  it('should allow a user to submit a form with valid data', async () => {
    await HomePage.clickOnProductsLink()
    await HomePage.clickOnMicrosoftTeamsLink()

    await expect(browser).toHaveUrlContaining(
      '/products/enterprise-integrations-ms-teams'
    )

    await expect(await MicrosoftTeamsPage.isHeadingDisplayed()).toBe(true)

    await expect(
      await MicrosoftTeamsPage.doesHeadingContainText('Microsoft Teams')
    ).toBe(true)

    await expect(await MicrosoftTeamsPage.isHeroOverviewTextDisplayed()).toBe(
      true
    )
    await expect(await MicrosoftTeamsPage.isTalkToExpertBtnDisplayed()).toBe(
      true
    )
    await expect(await MicrosoftTeamsPage.isGetStartedLinkDisplayed()).toBe(
      true
    )

    await expect(await MicrosoftTeamsPage.isFormSectionHeadingDisplayed()).toBe(
      true
    )
    await expect(
      await MicrosoftTeamsPage.isFormSectionDescriptionDisplayed()
    ).toBe(true)
    await expect(await MicrosoftTeamsPage.isFormBoxDisplayed()).toBe(true)

    const userData = await HomePage.generateUserData()
    await MicrosoftTeamsPage.fillForm(userData)

    await expect(browser).toHaveUrlContaining('/thank-you?formId')

    await expect(await ThankYouPage.isHeadingDisplayed()).toBe(true)
    await expect(await ThankYouPage.isHeroOverviewTextDisplayed()).toBe(true)
  })

  it('should NOT allow a user to submit a form with invalid data', async () => {
    await HomePage.clickOnProductsLink()
    await HomePage.clickOnMicrosoftTeamsLink()

    await expect(await browser).toHaveUrlContaining(
      '/products/enterprise-integrations-ms-teams'
    )

    await expect(await MicrosoftTeamsPage.isHeadingDisplayed()).toBe(true)

    await expect(
      await MicrosoftTeamsPage.doesHeadingContainText('Microsoft Teams')
    ).toBe(true)

    await expect(await MicrosoftTeamsPage.isHeroOverviewTextDisplayed()).toBe(
      true
    )
    await expect(await MicrosoftTeamsPage.isTalkToExpertBtnDisplayed()).toBe(
      true
    )
    await expect(await MicrosoftTeamsPage.isGetStartedLinkDisplayed()).toBe(
      true
    )

    await expect(await MicrosoftTeamsPage.isFormSectionHeadingDisplayed()).toBe(
      true
    )
    await expect(
      await MicrosoftTeamsPage.isFormSectionDescriptionDisplayed()
    ).toBe(true)
    await expect(await MicrosoftTeamsPage.isFormBoxDisplayed()).toBe(true)

    await MicrosoftTeamsPage.clickOnSubmitBtn()
    await expect(
      await MicrosoftTeamsPage.isErrorAlertDisplayed(
        await MicrosoftTeamsPage.firstNameInput
      )
    ).toBe(true)

    await MicrosoftTeamsPage.setFirstNameInput('Tom')
    await MicrosoftTeamsPage.clickOnSubmitBtn()
    await expect(
      await MicrosoftTeamsPage.isErrorAlertDisplayed(
        await MicrosoftTeamsPage.lastNameInput
      )
    ).toBe(true)

    await MicrosoftTeamsPage.setLastNameInput('Holland')
    await MicrosoftTeamsPage.clickOnSubmitBtn()
    expect(
      await MicrosoftTeamsPage.isErrorAlertDisplayed(
        await MicrosoftTeamsPage.emailInput
      )
    ).toBe(true)

    await MicrosoftTeamsPage.setEmailInput('tom.holland')
    await MicrosoftTeamsPage.selectOperator('0-50')
    await MicrosoftTeamsPage.clickOnSubmitBtn()

    await expect(
      await MicrosoftTeamsPage.isErrorAlertDisplayed(
        await MicrosoftTeamsPage.emailInput
      )
    ).toBe(true)

    await MicrosoftTeamsPage.setCompanyWebsiteInput('tom-holland')
    await MicrosoftTeamsPage.selectOperator('0-50')
    await MicrosoftTeamsPage.setEmailInput('tom@holland')
    await MicrosoftTeamsPage.clickOnSubmitBtn()

    await expect(
      await MicrosoftTeamsPage.isErrorAlertDisplayed(
        await MicrosoftTeamsPage.emailInput
      )
    ).toBe(true)
  })
})
