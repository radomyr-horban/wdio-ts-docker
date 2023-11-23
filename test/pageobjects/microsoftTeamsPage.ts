import Page from './page.js'

import { UserData } from '../types'

class MicrosoftTeamsPage extends Page {
  public get heroOverviewText() {
    return $('main > section > div > div > div > p')
  }

  public get formSectionDescription() {
    return $('section > div > div > p')
  }

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

  public async selectOperator(value: string) {
    await (await this.operatorSelect).selectByVisibleText(value)
  }

  public async fillForm(userData: UserData) {
    await this.firstNameInput.setValue(userData.firstName)
    await this.lastNameInput.setValue(userData.lastName)
    await this.emailInput.setValue(userData.email)
    await this.companyWebsiteInput.setValue(userData.website)
    await this.operatorSelect.selectByVisibleText('0-50')
    await this.submitBtn.click()
  }
}

export default new MicrosoftTeamsPage()
