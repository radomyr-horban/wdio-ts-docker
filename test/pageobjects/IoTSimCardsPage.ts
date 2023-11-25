import Page from './page.js'

class IoTSimCardsPage extends Page {
  // Elements
  public get heading() {
    return $('main h1')
  }

  public get orderSimCardBtn() {
    return $('a[href="https://telnyx.com/sign-up"]')
  }

  public get viewGlobalCoverageBtn() {
    return $('a[href="https://www.telnyx.com/iot-global-coverage#table-iot-global-coverage"]')
  }

  // Pricing Section
  public get calculatorSectionHeading() {
    return $('section[id="iot-sim-card-calculator"] h2')
  }

  public get calculatorSectionQuiz() {
    return $$('section[id="iot-sim-card-calculator"] > div > div:last-child')
  }

  public get currentQuestionNumber() {
    return $$('div[data-value]')[0]
  }

  // Pricing Quiz
  public get numberOfSimCardsInput() {
    return $('input[id="iot-sim-savings-calculator__number-of-sim-cards"]')
  }

  public get usePublicIPOption() {
    return $('input[id="iot-sim-savings-calculator__public-ip__-yes"]')
  }

  public get dataUsageInput() {
    return $('input[id="iot-sim-savings-calculator__number-of-mb-per-month"]')
  }

  public get selectCountryInput() {
    return $('[id="iot-sim-card-calculator"] button[role="combobox"]:last-child')
  }

  public get nextBtn() {
    return $('button=Next')
  }

  public get backBtn() {
    return $('//button//span[text()="Back"]')
  }

  // Last slide
  public get quizResultHeading() {
    return $('section[id="iot-sim-card-calculator"] p:nth-child(1)')
  }

  public get quizResultSubheading() {
    return $('//strong[text()="Monthly estimated costs"]')
  }

  public get quizSignUpBtn() {
    return $('section[id="iot-sim-card-calculator"] a[href="/sign-up"]')
  }

  public get quizResultTalkToExpertBtn() {
    return $('section[id="iot-sim-card-calculator"] a[href="/contact-us"]')
  }

  public async clickOnNumberOfSimCardsInput() {
    await this.clickElement(await this.numberOfSimCardsInput)
  }

  public async clickOnUsePublicIPOption() {
    await this.clickElement(await this.usePublicIPOption)
  }

  public async clickOnDataUsageInput() {
    await this.clickElement(await this.dataUsageInput)
  }

  public async clickOnSelectCountryInput() {
    await (await this.selectCountryInput).waitForDisplayed()
    await this.clickElement(await this.selectCountryInput)
  }

  public async clickOnNextBtn() {
    await this.clickElement(await this.nextBtn)
  }

  public async setNumberOfSimCardsInput(value: number) {
    await (await this.numberOfSimCardsInput).setValue(value)
  }

  public async setDataUsageInput(value: number) {
    await (await this.dataUsageInput).setValue(value)
  }

  public async setCountryOption(value: string) {
    const countryOption = await $(`//div[@role="option"]/span[@class="c-PJLV c-ihLeEO" and text()='${value}']`)
    await this.clickElement(countryOption)
  }
}

export default new IoTSimCardsPage()
