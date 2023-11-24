import Page from './page.js'

class ReleaseNotesPage extends Page {
  // Elements
  get heading() {
    return $('main h1')
  }

  get filterDropdown() {
    return $('button[id="product-filter"]')
  }

  get filterDropdownList() {
    return $('div[role="listbox"]')
  }

  get filterDropdownListOptions() {
    return $$('[role="presentation"] div[role="option"] span')
  }

  get featureRequestLink() {
    return $('[href="https://portal.productboard.com/telnyx"]')
  }

  get followUsOnTwitterLink() {
    return $('main a[href="https://twitter.com/telnyx"]')
  }

  get paginationNav() {
    return $('nav[aria-label="pagination"]')
  }

  get nextPageLink() {
    return $('svg[aria-describedby="go-to-next-page"]')
  }

  get previousPageLink() {
    return $('svg[aria-describedby="go-to-previous-page"]')
  }

  // get nextPageLinkTitle() {
  //   return $('title[id="go-to-next-page"]')
  // }

  // get previousPageLinkTitle() {
  //   return $('title[id="go-to-previous-page"]')
  // }

  get currentPageNumber() {
    return $('nav[aria-label="pagination"] > p > span:first-child')
  }

  // Clickers
  async clickOnFilterDropdown() {
    await (await this.filterDropdown).waitForDisplayed()
    await (await this.filterDropdown).click()
  }

  //! error
  async selectProductOption(value: string) {
    const optionContainingSpan = await $(
      `//div[@role="listbox"]//div[@role="option"][descendant::span[text()='${value}']]`
    )
    await this.clickElement(optionContainingSpan)
  }

  // Pagination
  async clickOnNextPageLink() {
    // await (await this.nextPageLinkTitle).toHaveText('Go to next page')
    await this.clickElement(await this.nextPageLink)
  }

  async clickOnPreviousPageLink() {
    // await (await this.previousPageLinkTitle).toHaveText('Go to previous page')
    await this.clickElement(await this.previousPageLink)
  }
}

export default new ReleaseNotesPage()
