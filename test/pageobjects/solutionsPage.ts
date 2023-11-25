import Page from './page.js'

class SolutionsPage extends Page {
  public get heading() {
    return $('main h1')
  }

  public get heroOverviewText() {
    return $('section[contenttype="heroOverview"] > div > div > p')
  }

  public get seeIndustriesLink() {
    return $('a[title="See industries"]')
  }

  public get seeUseCasesLink() {
    return $('a[title="See use cases"]')
  }

  public get useCasesSectionStrongText() {
    return $('section[id="use-cases"] strong')
  }

  public get useCasesSectionHeading() {
    return $('section[id="use-cases"] h2')
  }

  public get filterDropdownBtn() {
    return $('button[id="department-filter"]')
  }

  public get filterDropdownList() {
    return $('div[role="listbox"]')
  }

  public get filterDropdownListOptions() {
    return $$('div[role="listbox"] div[role="option"]')
  }

  public async clickOnSeeUseCasesLink() {
    await this.clickElement(await this.seeUseCasesLink)
  }

  public async clickOnFilterDropdownBtn() {
    await this.clickElement(await this.filterDropdownBtn)
  }
}

export default new SolutionsPage()
