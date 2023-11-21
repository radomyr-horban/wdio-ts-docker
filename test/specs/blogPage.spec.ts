import HomePage from '../pageobjects/homePage.js'
import BlogPage from '../pageobjects/blogPage.js'

describe('Blog page', () => {
  beforeEach(async () => {
    await browser.maximizeWindow()
    await browser.url('/')
    // await acceptCookiesHelper()
    await HomePage.closeCookiesBox()
  })

  it('should display pagination', async () => {
    await HomePage.clickOnResourcesLink()
    await browser.pause(500) //!
    await HomePage.clickOnBlogLink()

    await expect(browser).toHaveUrlContaining('/resources')
    await expect(
      BlogPage.doesHeadingContainText('Browse all articles, guides, and news')
    ).toBeTruthy()
    await expect(BlogPage.isSearchInputDisplayed).toBeTruthy()
    await expect(
      BlogPage.doesArticlesSectionHeadingContainText('View all articles')
    ).toBeTruthy()

    await BlogPage.clickOnNextPageBtn()

    await expect(browser).toHaveUrlContaining('/page/2')
    await expect(
      BlogPage.doesArticlesSectionHeadingContainText('(2)')
    ).toBeTruthy()
  })

  it('should allow a user to sort articles', async () => {
    await HomePage.clickOnResourcesLink()
    await browser.pause(500) //!
    await HomePage.clickOnBlogLink()

    await expect(browser).toHaveUrlContaining('/resources')
    await expect(
      BlogPage.doesHeadingContainText('Browse all articles, guides, and news')
    ).toBeTruthy()
    await expect(BlogPage.isSearchInputDisplayed).toBeTruthy()
    await expect(
      BlogPage.doesArticlesSectionHeadingContainText('View all articles')
    ).toBeTruthy()

    await BlogPage.clickOnFirstProductFilterOption()
    await expect(browser).toHaveUrlContaining('topic/voice')

    await BlogPage.clickOnFirstContentTypeFilterOption()
    await expect(browser).toHaveUrlContaining('category=partnerships')
  })
})
