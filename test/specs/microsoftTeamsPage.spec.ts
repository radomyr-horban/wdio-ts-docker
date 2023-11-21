import HomePage from '../pageobjects/homePage.js'
import MicrosoftTeamsPage from '../pageobjects/microsoftTeamsPage.js'
import ThankYouPage from '../pageobjects/thankYouPage.js'

import { acceptCookiesHelper } from '../helpers/acceptCookies.helper.js'
import { generateUserData } from '../helpers/generateUserData.helper.js'

describe('Microsoft Teams page', () => {
  beforeEach(async () => {
    await browser.maximizeWindow()
    await browser.url('/')
    await acceptCookiesHelper()
  })

  it('should allow a user to submit a form with valid data', async () => {
    await HomePage.clickOnProductsLink()
    await HomePage.clickOnMicrosoftTeamsLink()

    await expect(browser).toHaveUrlContaining(
      '/products/enterprise-integrations-ms-teams'
    )

    expect(await MicrosoftTeamsPage.isHeadingDisplayed()).toBe(true)

    expect(
      await MicrosoftTeamsPage.doesHeadingContainText('Microsoft Teams')
    ).toBe(true)

    expect(await MicrosoftTeamsPage.isHeroOverviewTextDisplayed()).toBe(true)
    expect(await MicrosoftTeamsPage.isTalkToExpertBtnDisplayed()).toBe(true)
    expect(await MicrosoftTeamsPage.isGetStartedLinkDisplayed()).toBe(true)

    expect(await MicrosoftTeamsPage.isFormSectionHeadingDisplayed()).toBe(true)
    expect(await MicrosoftTeamsPage.isFormSectionDescriptionDisplayed()).toBe(
      true
    )
    expect(await MicrosoftTeamsPage.isFormBoxDisplayed()).toBe(true)

    const userData = generateUserData()
    await MicrosoftTeamsPage.fillForm(userData)

    await expect(browser).toHaveUrlContaining('/thank-you?formId')

    expect(await ThankYouPage.isHeadingDisplayed()).toBe(true)
    expect(await ThankYouPage.isHeroOverviewTextDisplayed()).toBe(true)
  })

  it('should NOT allow a user to submit a form with invalid data', async () => {
    await HomePage.clickOnProductsLink()
    await HomePage.clickOnMicrosoftTeamsLink()

    expect(await browser).toHaveUrlContaining(
      '/products/enterprise-integrations-ms-teams'
    )

    expect(await MicrosoftTeamsPage.isHeadingDisplayed()).toBe(true)

    expect(
      await MicrosoftTeamsPage.doesHeadingContainText('Microsoft Teams')
    ).toBe(true)

    expect(await MicrosoftTeamsPage.isHeroOverviewTextDisplayed()).toBe(true)
    expect(await MicrosoftTeamsPage.isTalkToExpertBtnDisplayed()).toBe(true)
    expect(await MicrosoftTeamsPage.isGetStartedLinkDisplayed()).toBe(true)

    expect(await MicrosoftTeamsPage.isFormSectionHeadingDisplayed()).toBe(true)
    expect(await MicrosoftTeamsPage.isFormSectionDescriptionDisplayed()).toBe(
      true
    )
    expect(await MicrosoftTeamsPage.isFormBoxDisplayed()).toBe(true)

    await MicrosoftTeamsPage.clickOnSubmitBtn()
    expect(
      await MicrosoftTeamsPage.isErrorAlertDisplayed(
        await MicrosoftTeamsPage.firstNameInput
      )
    ).toBe(true)

    await MicrosoftTeamsPage.setFirstNameInput('Tom')
    await MicrosoftTeamsPage.clickOnSubmitBtn()
    expect(
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
