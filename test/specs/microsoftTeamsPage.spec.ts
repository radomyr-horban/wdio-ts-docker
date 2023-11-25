import HomePage from '../pageobjects/homePage.js'
import MicrosoftTeamsPage from '../pageobjects/microsoftTeamsPage.js'
import ThankYouPage from '../pageobjects/thankYouPage.js'

describe('Microsoft Teams page', () => {
  beforeEach(async () => {
    await browser.setWindowSize(1920, 1080)
    await browser.url('/')
    await HomePage.closeCookiesBox()
  })

  it('should allow a user to submit a form with valid data', async () => {
    await HomePage.clickOnProductsLink()
    await HomePage.clickOnMicrosoftTeamsLink()


    await expect(browser).toHaveUrlContaining('/products/enterprise-integrations-ms-teams')
    await expect(await MicrosoftTeamsPage.heading).toBeDisplayed()
    await expect(await MicrosoftTeamsPage.heading).toHaveTextContaining('Microsoft Teams')
    await expect(await MicrosoftTeamsPage.heroOverviewText).toBeDisplayed()
    await expect(await MicrosoftTeamsPage.talkToExpertBtn).toBeDisplayed()
    await expect(await MicrosoftTeamsPage.getStartedLink).toBeDisplayed()
    await expect(await MicrosoftTeamsPage.formSectionHeading).toBeDisplayed()
    await expect(await MicrosoftTeamsPage.formSectionDescription).toBeDisplayed()
    await expect(await MicrosoftTeamsPage.formBox).toBeDisplayed()

    const userData = await HomePage.generateUserData()
    await MicrosoftTeamsPage.fillForm(userData)
    await expect(browser).toHaveUrlContaining('/thank-you?formId')
    await expect(await ThankYouPage.heading).toBeDisplayed()
    await expect(await ThankYouPage.heroOverviewText).toBeDisplayed()
  })

  it('should NOT allow a user to submit a form with invalid data', async () => {
    await HomePage.clickOnProductsLink()
    await HomePage.clickOnMicrosoftTeamsLink()


    await expect(browser).toHaveUrlContaining('/products/enterprise-integrations-ms-teams')

    await expect(await MicrosoftTeamsPage.heading).toBeDisplayed()
    await expect(await MicrosoftTeamsPage.heading).toHaveTextContaining('Microsoft Teams')
    await expect(await MicrosoftTeamsPage.heroOverviewText).toBeDisplayed()
    await expect(await MicrosoftTeamsPage.talkToExpertBtn).toBeDisplayed()
    await expect(await MicrosoftTeamsPage.getStartedLink).toBeDisplayed()
    await expect(await MicrosoftTeamsPage.formSectionHeading).toBeDisplayed()
    await expect(await MicrosoftTeamsPage.formSectionDescription).toBeDisplayed()
    await expect(await MicrosoftTeamsPage.formBox).toBeDisplayed()

    await MicrosoftTeamsPage.clickOnSubmitBtn()
    await expect(await MicrosoftTeamsPage.isErrorAlertDisplayed(await MicrosoftTeamsPage.firstNameInput))

   
    await MicrosoftTeamsPage.setFirstNameInput('Tom')
    await MicrosoftTeamsPage.clickOnSubmitBtn()
    await expect(await MicrosoftTeamsPage.isErrorAlertDisplayed(await MicrosoftTeamsPage.lastNameInput))

    
    await MicrosoftTeamsPage.setLastNameInput('Holland')
    await MicrosoftTeamsPage.clickOnSubmitBtn()
    await expect(await MicrosoftTeamsPage.isErrorAlertDisplayed(await MicrosoftTeamsPage.emailInput))

  
    await MicrosoftTeamsPage.setEmailInput('tom.holland')
    await MicrosoftTeamsPage.selectOperator('0-50')
    await MicrosoftTeamsPage.clickOnSubmitBtn()
    await expect(await MicrosoftTeamsPage.isErrorAlertDisplayed(await MicrosoftTeamsPage.emailInput))

   
    await MicrosoftTeamsPage.setCompanyWebsiteInput('tom-holland')
    await MicrosoftTeamsPage.selectOperator('0-50')
    
    await MicrosoftTeamsPage.setEmailInput('tom@holland')
    await MicrosoftTeamsPage.clickOnSubmitBtn()
    await expect(await MicrosoftTeamsPage.isErrorAlertDisplayed(await MicrosoftTeamsPage.emailInput))
  })
})
