import Page from './page.js'

class TelnyxVsTwilioPage extends Page {
  public get heading() {
    return $('main h1')
  }

  public get talkToExpertBtn() {
    return $('section a[href="/contact-us"]')
  }

  public get savingsCalculatorHeading() {
    return $('section[id="savings-calculator"] h2')
  }

  public get savingsCalculatorQuiz() {
    return $('section[id="savings-calculator"] > div> div:last-child')
  }

  public get currentQuestionNumber() {
    return $$('div[data-value]')[0]
  }

  public get numberTypeOption() {
    return $('input[id="number-type-0"]')
  }

  public get sendMessagesOption() {
    return $('input[id="send-messages-0"]')
  }

  public get receiveMessagesOption() {
    return $('input[id="receive-messages-0"]')
  }

  public get nextBtn() {
    return $('//button//span[text()="Next"]')
  }

  public get backBtn() {
    return $('//button//span[text()="Back"]')
  }

  public get calculateSavingsBtn() {
    return $('//button//span[text()="Calculate savings"]')
  }

  public get quizResultHeading() {
    return $('section[id="savings-calculator"] h3')
  }

  public get quizResultTwilio() {
    return $('//strong[text()="Twilio"]')
  }

  public get quizResultTelnyx() {
    return $('//strong[text()="Telnyx"]')
  }

  public get quizResultSavingsPerMonth() {
    return $('//strong[text()="SAVINGS per month"]')
  }

  public get quizResultTalkToExpertBtn() {
    return $('section[id="savings-calculator"] a[href="/contact-us"]')
  }

  public async clickOnNumberTypeOption() {
    await this.clickElement(await this.numberTypeOption)
  }

  public async clickOnSendMessagesOption() {
    await this.clickElement(await this.sendMessagesOption)
  }

  public async clickOnReceiveMessagesOption() {
    await this.clickElement(await this.receiveMessagesOption)
  }

  public async clickOnNextBtn() {
    await this.clickElement(await this.nextBtn)
  }

  public async clickOnCalculateSavingsBtn() {
    await this.clickElement(await this.calculateSavingsBtn)
  }
}

export default new TelnyxVsTwilioPage()
