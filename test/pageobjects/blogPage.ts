import Page from './page.js'

class BlogPage extends Page {
  public async doesHeadingContainText(text: string): Promise<boolean> {
    return await this.doesElementContainText('main h1', text)
  }

  public async isSubHeadingDisplayed(): Promise<boolean> {
    return await this.isElementDisplayed('header h2 > span')
  }

  get filterDropdown() {
    return this.getElement('#blog-filter')
  }

  get filterDropdownList() {
    return this.getElement('div[role="listbox"]')
  }

  get filterDropdownListOptions() {
    return this.getElement('div[role="option"] a')
  }

  //! methods
  public async isSearchInputDisplayed(): Promise<boolean> {
    return this.isElementDisplayed('input#search')
  }

  public async doesArticlesSectionHeadingContainText(
    text: string
  ): Promise<boolean> {
    return await this.doesElementContainText('#articles h2', text)
  }

  // get paginationNav() {
  //   return this.getElement('nav[aria-label="pagination"]')
  // }

  // get nextPageLinkTitle() {
  //   return this.getElement('title[id="go-to-next-page"]')
  // }

  // get firstArticleCategory() {
  //   return this.getElement('#articles ul li:first-child  a strong')
  // }

  // get firstArticleTitle() {
  //   return this.getElement('#articles ul li:first-child  a h3')
  // }

  // get firstArticleAuthor() {
  //   return this.getElement('#articles ul li:first-child  a p')
  // }

  public async clickOnFirstProductFilterOption(): Promise<void> {
    // await this.clickElement('a[href="/resources/topic/voice"]')
    await this.clickElement('[id="articles"] > div > div > div:first-child a')
  }

  public async clickOnFirstContentTypeFilterOption(): Promise<void> {
    // await this.clickElement('a[href="//resources/topic/voice?category=partnerships"]')
    await this.clickElement('[id="articles"] > div > div > div:last-child a')
  }

  public async clickOnNextPageBtn(): Promise<void> {
    await this.clickElement('svg[aria-describedby="go-to-next-page"]')
    // await this.clickElement('a[href="/resources/page/2#articles"]')
  }

  //! article
  public async clickOnFirstArticle(): Promise<void> {
    await this.clickElement('#articles ul li:first-child a')
  }

  public async clickOnLastArticle(): Promise<void> {
    await this.clickElement('#articles ul li:last-child a')
  }
}

export default new BlogPage()
