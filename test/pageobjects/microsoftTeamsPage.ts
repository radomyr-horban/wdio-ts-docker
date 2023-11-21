import Page from './page.js'

interface UserData {
  firstName: string
  lastName: string
  email: string
  website: string
}

class MicrosoftTeamsPage extends Page {
  public isHeroOverviewTextDisplayed(): Promise<boolean> {
    return this.isElementDisplayed('main > section > div > div > div > p')
  }

  public isFormSectionDescriptionDisplayed(): Promise<boolean> {
    return this.isElementDisplayed('section > div > div > p')
  }

  //! Getters
  // get talkToExpertBtn() {
  //   return this.getElement('//span[text()="Talk to an expert"]')
  // }

  // get getStartedLink() {
  //   return this.getElement('//span[text()="Get started"]')
  // }

  // get formSectionHeading() {
  //   return this.getElement('section > div > h2')
  // }

  // get formBox() {
  //   return this.getElement(
  //     'div[title="Interested in Operator Connect? (Bottom)"]'
  //   )
  // }

  //todo: remove getters
  get firstNameInput() {
    return this.getElement('input[id="FirstName"]')
  }

  get lastNameInput() {
    return this.getElement('input[id="LastName"]')
  }

  get emailInput() {
    return this.getElement('input[id="Email"]')
  }

  get companyWebsiteInput() {
    return this.getElement('input[id="Website"]')
  }

  get operatorSelect() {
    return this.getElement('select[id="Form_Operator_Connect_Seats__c"]')
  }

  //! isDisplayed()
  public isHeadingDisplayed(): Promise<boolean> {
    return this.isElementDisplayed('main h1')
  }

  public isTalkToExpertBtnDisplayed(): Promise<boolean> {
    return this.isElementDisplayed('//span[text()="Talk to an expert"]')
  }

  public isGetStartedLinkDisplayed(): Promise<boolean> {
    return this.isElementDisplayed('//span[text()="Get started"]')
  }

  public isFormSectionHeadingDisplayed(): Promise<boolean> {
    return this.isElementDisplayed('section > div > h2')
  }

  public isFirstArticleCategoryDisplayed(): Promise<boolean> {
    return this.isElementDisplayed('#articles ul li:first-child a strong')
  }
  public isFormBoxDisplayed(): Promise<boolean> {
    return this.isElementDisplayed(
      'div[title="Interested in Operator Connect? (Bottom)"]'
    )
  }

  //todo: fix `isErrorAlertDisplayed` method
  async isErrorAlertDisplayed(
    inputField: WebdriverIO.Element
  ): Promise<boolean> {
    const inputId = await inputField.getAttribute('id')
    return this.isElementDisplayed(`input[id="${inputId}"]+div.mktoError`)
  }

  async clickOnSubmitBtn() {
    await this.clickElement('button[type="submit"]')
  }

  async setFirstNameInput(value: string) {
    await this.setElementInputValue('input[id="FirstName"]', value)
  }

  async setLastNameInput(value: string) {
    await this.setElementInputValue('input[id="LastName"]', value)
  }

  async setEmailInput(value: string) {
    await this.clearElementInputValue('input[id="Email"]')
    await this.setElementInputValue('input[id="Email"]', value)
  }

  async setCompanyWebsiteInput(value: string) {
    await this.setElementInputValue('input[id="Website"]', value)
  }

  //todo: fix type
  async selectOperator(value: string) {
    await (await this.operatorSelect).selectByVisibleText(value)
  }

  //todo: remove duplicate (`main h1`)
  public async doesHeadingContainText(text: string): Promise<boolean> {
    return await this.doesElementContainText('main h1', text)
  }

  async fillForm(userData: UserData) {
    await this.setFirstNameInput(userData.firstName)
    await this.setLastNameInput(userData.lastName)
    await this.setEmailInput(userData.email)
    await this.setCompanyWebsiteInput(userData.website)
    await this.selectOperator('0-50')
    await this.clickOnSubmitBtn()
  }
}

export default new MicrosoftTeamsPage()
