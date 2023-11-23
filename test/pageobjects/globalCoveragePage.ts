import Page from './page.js'
import { $ } from '@wdio/globals'

import { UserData } from '../types'

class GlobalCoveragePage extends Page {
  public get heading() {
    return $('main h1')
  }

  public get heroOverviewText() {
    return $('main > section > div > div > p')
  }

  public get viewFullCoverageLink() {
    return $('a[href="#our-global-coverage"]')
  }

  public get fullCoverageForm() {
    return $('form[id="mktoForm_2555"]')
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

  public get submitBtn() {
    return $('button[type="submit"]')
  }

  public get errorAlert() {
    return $('div.mktoError')
  }

  public async fillForm(userData: UserData) {
    await this.firstNameInput.setValue(userData.firstName)
    await this.lastNameInput.setValue(userData.lastName)
    await this.emailInput.setValue(userData.email)
    await this.submitBtn.click()
  }
}

export default new GlobalCoveragePage()
