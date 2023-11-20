import Page from './page.js'

class BlogPage extends Page {
  public get filterDropdown() {
    return this.getElement('#blog-filter')
  }

  public get filterDropdownList() {
    return this.getElement('div[role="listbox"]')
  }

  public get filterDropdownListOptions() {
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

  public async isSubHeadingDisplayed(): Promise<boolean> {
    return await this.isElementDisplayed('header h2 > span')
  }

  public async isFirstArticleCategoryDisplayed(): Promise<boolean> {
    return this.isElementDisplayed('#articles ul li:first-child a strong')
  }

  public async isFirstArticleTitleDisplayed(): Promise<boolean> {
    return this.isElementDisplayed('#articles ul li:first-child a h3')
  }

  public async isFirstArticleAuthorDisplayed(): Promise<boolean> {
    return this.isElementDisplayed('#articles ul li:first-child a p')
  }

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

  public async clickOnFirstArticle(): Promise<void> {
    await this.clickElement('#articles ul li:first-child a')
  }

  public async doesHeadingContainText(text: string): Promise<boolean> {
    return await this.doesElementContainText('main h1', text)
  }
}

export default new BlogPage()
