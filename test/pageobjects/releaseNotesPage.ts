import Page from './page.js'

class ReleaseNotesPage extends Page {
  public get heading() {
    return $('main h1')
  }

  public get filterDropdown() {
    return $('button[id="product-filter"]')
  }

  public get filterDropdownList() {
    return $('div[role="listbox"]')
  }

  public get filterDropdownListOptions() {
    return $$('[role="presentation"] div[role="option"] span')
  }

  public get featureRequestLink() {
    return $('[href="https://portal.productboard.com/telnyx"]')
  }

  public get followUsOnTwitterLink() {
    return $('main a[href="https://twitter.com/telnyx"]')
  }

  public get paginationNav() {
    return $('nav[aria-label="pagination"]')
  }

  public get nextPageLink() {
    return $('svg[aria-describedby="go-to-next-page"]')
  }

  public get previousPageLink() {
    return $('svg[aria-describedby="go-to-previous-page"]')
  }

  // public get nextPageLinkTitle() {
  //   return $('title[id="go-to-next-page"]')
  // }

  // public get previousPageLinkTitle() {
  //   return $('title[id="go-to-previous-page"]')
  // }

  public get currentPageNumber() {
    return $('nav[aria-label="pagination"] > p > span:first-child')
  }

  public async clickOnFilterDropdown() {
    await (await this.filterDropdown).waitForDisplayed()
    await (await this.filterDropdown).click()
  }

  public async selectProductOption(value: string) {
    const optionContainingSpan = await $(
      `//div[@role="listbox"]//div[@role="option"][descendant::span[text()='${value}']]`
    )
    await this.clickElement(optionContainingSpan)
  }

  public async clickOnNextPageLink() {
    await this.clickElement(await this.nextPageLink)
  }

  public async clickOnPreviousPageLink() {
    await this.clickElement(await this.previousPageLink)
  }
}

export default new ReleaseNotesPage()
