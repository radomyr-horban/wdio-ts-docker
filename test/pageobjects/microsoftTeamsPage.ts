import Page from './page.js'

import { UserData } from '../types'

class MicrosoftTeamsPage extends Page {
  public get heroOverviewText() {
    return $('main > section > div > div > div > p')
  }

  public get formSectionDescription() {
    return $('section > div > div > p')
  }

  //! input
  public get firstNameInput() {
    return $('input[id="FirstName"]')
  }

  public get lastNameInput() {
    return $('input[id="LastName"]')
  }

  public get emailInput() {
    return $('input[id="Email"]')
  }

  public get companyWebsiteInput() {
    return $('input[id="Website"]')
  }

  public get operatorSelect() {
    return $('select[id="Form_Operator_Connect_Seats__c"]')
  }

  public async setFirstNameInput(value: string) {
    await this.setInputValue(await this.firstNameInput, value)
  }

  public async setLastNameInput(value: string) {
    await this.setInputValue(await this.lastNameInput, value)
  }

  public async setEmailInput(value: string) {
    await this.setInputValue(await this.emailInput, value)
  }

  public async setCompanyWebsiteInput(value: string) {
    await this.setInputValue(await this.companyWebsiteInput, value)
  }



  public get heading() {
    return $('main h1')
  }

  public get talkToExpertBtn() {
    return $('//span[text()="Talk to an expert"]')
  }

  public get getStartedLink() {
    return $('//span[text()="Get started"]')
  }

  public get formSectionHeading() {
    return $('section > div > h2')
  }

  public get firstArticleCategory() {
    return $('#articles ul li:first-child a strong')
  }

  public get formBox() {
    return $('div[title="Interested in Operator Connect? (Bottom)"]')
  }

  public get submitBtn() {
    return $('button[type="submit"]')
  }

  public async clickOnSubmitBtn(): Promise<void> {
    await this.clickElement(await this.submitBtn)
  }

  public async selectOperator(value: string) {
    await (await this.operatorSelect).selectByVisibleText(value)
  }

  public async fillForm(userData: UserData) {
  

    await this.setFirstNameInput(userData.firstName)
    await this.setLastNameInput(userData.lastName)
    await this.setEmailInput(userData.email)
    await this.setCompanyWebsiteInput(userData.website)

    await this.operatorSelect.waitForDisplayed()
    await this.operatorSelect.scrollIntoView()
    await this.operatorSelect.selectByVisibleText('0-50')

    await this.clickOnSubmitBtn()
  }
}

export default new MicrosoftTeamsPage()
