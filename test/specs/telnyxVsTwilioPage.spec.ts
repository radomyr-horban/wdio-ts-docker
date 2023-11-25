import HomePage from '../pageobjects/homePage.js'
import TelnyxVsTwilioPage from '../pageobjects/telnyxVsTwilioPage.js'

describe('Telnyx Vs TwilioPage page', () => {
  beforeEach(async () => {
    await browser.setWindowSize(1920, 1080)
    await browser.url('/')
    await HomePage.closeCookiesBox()
  })

  it('should allow a user to submit a form with valid data', async () => {
    let currentQuestionNumber = 1

    await HomePage.clickOnTelnyxVsTwilioLink()

    await expect(browser).toHaveUrlContaining('/the-better-twilio-alternative')
    await expect(TelnyxVsTwilioPage.heading).toBeDisplayed()
    await expect(TelnyxVsTwilioPage.heading).toHaveTextContaining('The top Twilio alternative')
    await expect(TelnyxVsTwilioPage.talkToExpertBtn).toBeDisplayed()

    await TelnyxVsTwilioPage.savingsCalculatorQuiz.scrollIntoView()
    await expect(TelnyxVsTwilioPage.savingsCalculatorHeading).toBeDisplayed()
    await expect(TelnyxVsTwilioPage.savingsCalculatorQuiz).toBeDisplayed()

    await expect(TelnyxVsTwilioPage.currentQuestionNumber).toHaveAttribute('data-value', `${currentQuestionNumber}`)
    await TelnyxVsTwilioPage.clickOnNumberTypeOption()
    await expect(TelnyxVsTwilioPage.nextBtn).toBeDisplayed()
    await TelnyxVsTwilioPage.clickOnNextBtn()

    await expect(TelnyxVsTwilioPage.currentQuestionNumber).toHaveAttribute('data-value', `${++currentQuestionNumber}`)
    await TelnyxVsTwilioPage.clickOnSendMessagesOption()
    await expect(TelnyxVsTwilioPage.backBtn).toBeDisplayed()
    await TelnyxVsTwilioPage.clickOnNextBtn()

    await expect(TelnyxVsTwilioPage.currentQuestionNumber).toHaveAttribute('data-value', `${++currentQuestionNumber}`)
    await TelnyxVsTwilioPage.clickOnReceiveMessagesOption()
    await expect(TelnyxVsTwilioPage.backBtn).toBeDisplayed()
    await TelnyxVsTwilioPage.clickOnCalculateSavingsBtn()

    await expect(TelnyxVsTwilioPage.currentQuestionNumber).toHaveAttribute('data-value', `${++currentQuestionNumber}`)
    await expect(TelnyxVsTwilioPage.backBtn).toBeDisplayed()
    await expect(TelnyxVsTwilioPage.quizResultHeading).toBeDisplayed()
    await expect(TelnyxVsTwilioPage.quizResultTwilio).toBeDisplayed()
    await expect(TelnyxVsTwilioPage.quizResultTelnyx).toBeDisplayed()
    await expect(TelnyxVsTwilioPage.quizResultSavingsPerMonth).toBeDisplayed()
    await expect(TelnyxVsTwilioPage.quizResultTalkToExpertBtn).toBeDisplayed()
  })
})
