import Page from './page.js'

class BlogArticlePage extends Page {
  public async isElementDisplayed(selector: string): Promise<boolean> {
    const element = await this.getElement(selector)
    return element.isDisplayed()
  }

  public async isBackToBlogLinkDisplayed(): Promise<boolean> {
    return this.isElementDisplayed('main a[href="/resources"]')
  }

  public async isCategoryAndLastUpdateDateDisplayed(): Promise<boolean> {
    return this.isElementDisplayed('main>div:first-child strong')
  }

  public async isHeadingDisplayed(): Promise<boolean> {
    return this.isElementDisplayed('main h1')
  }

  public async isAuthorNameDisplayed(): Promise<boolean> {
    return this.isElementDisplayed('div [data-author-initials]+p')
  }

  public async isShareOnSocialTextDisplayed(): Promise<boolean> {
    return this.isElementDisplayed('//span[text()="Share on Social"]')
  }
}

export default new BlogArticlePage()
