import HomePage from '../pageobjects/homePage.js'
import IoTSimCardsPage from '../pageobjects/IoTSimCardsPage.js'

describe('IoT Sim Cards page', () => {
  beforeEach(async () => {
    await browser.setWindowSize(1920, 1080)
    await browser.url('/')
    await HomePage.closeCookiesBox()
  })

  it('should allow a user to submit a form with valid data', async () => {
    let currentQuestionNumber = 1

    await HomePage.clickOnProductsLink()
    await HomePage.clickOnIoTSimCardsLink()

    await expect(browser).toHaveUrlContaining('/iot-sim-card')
    await expect(IoTSimCardsPage.heading).toBeDisplayed()
    await expect(IoTSimCardsPage.heading).toHaveText('IoT SIM Cards')

    // Calculator Section
    await expect(IoTSimCardsPage.calculatorSectionHeading).toBeDisplayed()
    await expect(IoTSimCardsPage.calculatorSectionQuiz).toBeDisplayed()

    // Quiz
    await expect(IoTSimCardsPage.currentQuestionNumber).toHaveAttribute('data-value', `${currentQuestionNumber}`)
    await IoTSimCardsPage.clickOnNumberOfSimCardsInput()
    await IoTSimCardsPage.setNumberOfSimCardsInput(2)
    await expect(IoTSimCardsPage.nextBtn).toBeDisplayed()
    await IoTSimCardsPage.clickOnNextBtn()

    await expect(IoTSimCardsPage.currentQuestionNumber).toHaveAttribute('data-value', `${++currentQuestionNumber}`)
    await expect(IoTSimCardsPage.backBtn).toBeDisplayed()
    await IoTSimCardsPage.clickOnDataUsageInput()
    await IoTSimCardsPage.setDataUsageInput(2)
    await expect(IoTSimCardsPage.nextBtn).toBeDisplayed()
    await IoTSimCardsPage.clickOnNextBtn()

    await expect(IoTSimCardsPage.currentQuestionNumber).toHaveAttribute('data-value', `${++currentQuestionNumber}`)
    await expect(IoTSimCardsPage.backBtn).toBeDisplayed()
    await IoTSimCardsPage.clickOnSelectCountryInput()
    await IoTSimCardsPage.setCountryOption('Ukraine')
    await expect(IoTSimCardsPage.nextBtn).toBeDisplayed()
    await IoTSimCardsPage.clickOnNextBtn()

    await expect(IoTSimCardsPage.currentQuestionNumber).toHaveAttribute('data-value', `${++currentQuestionNumber}`)
    await expect(IoTSimCardsPage.backBtn).toBeDisplayed()
    await IoTSimCardsPage.clickOnUsePublicIPOption()
    await expect(IoTSimCardsPage.nextBtn).toBeDisplayed()
    await IoTSimCardsPage.clickOnNextBtn()

    // last slide
    await expect(IoTSimCardsPage.currentQuestionNumber).toHaveAttribute('data-value', `${++currentQuestionNumber}`)
    await expect(IoTSimCardsPage.quizResultHeading).toBeDisplayed()
    await expect(IoTSimCardsPage.quizResultSubheading).toBeDisplayed()
    await expect(IoTSimCardsPage.quizSignUpBtn).toBeDisplayed()
    await expect(IoTSimCardsPage.quizResultTalkToExpertBtn).toBeDisplayed()
  })

  //! This test fails because there is a BUG in this section
  it('should NOT allow a user to submit a form with invalid data', async () => {
    let currentQuestionNumber = 1

    await HomePage.clickOnProductsLink()
    await HomePage.clickOnIoTSimCardsLink()

    await expect(browser).toHaveUrlContaining('/iot-sim-card')
    await expect(IoTSimCardsPage.heading).toBeDisplayed()
    await expect(IoTSimCardsPage.heading).toHaveText('IoT SIM Cards')

    // Calculator Section
    await expect(IoTSimCardsPage.calculatorSectionHeading).toBeDisplayed()
    await expect(IoTSimCardsPage.calculatorSectionQuiz).toBeDisplayed()

    // Quiz
    await expect(IoTSimCardsPage.currentQuestionNumber).toHaveAttribute('data-value', `${currentQuestionNumber}`)
    await IoTSimCardsPage.clickOnNumberOfSimCardsInput()
    await IoTSimCardsPage.setNumberOfSimCardsInput(-2)
    await expect(IoTSimCardsPage.nextBtn).not.toBeDisplayed()
  })
})
