import HomePage from '../pageobjects/homePage.js'
import BlogPage from '../pageobjects/blogPage.js'
import BlogArticlePage from '../pageobjects/blogArticlePage.js'

describe('Blog article page', () => {
  beforeEach(async () => {
    await browser.maximizeWindow()
    await browser.url('/')
    // await acceptCookiesHelper()
    await HomePage.closeCookiesBox()
  })

  it('should display main elements', async () => {
    await HomePage.clickOnResourcesLink()
    await HomePage.clickOnBlogLink()

    await expect(browser).toHaveUrlContaining('/resources')
    await expect(browser).toHaveUrlContaining('/resources')
    await expect(
      BlogPage.doesHeadingContainText('Browse all articles, guides, and news')
    ).toBeTruthy()
    await expect(BlogPage.isSearchInputDisplayed).toBeTruthy()
    await expect(
      BlogPage.doesArticlesSectionHeadingContainText('View all articles')
    ).toBeTruthy()

    //! article
    await expect(BlogPage.isFirstArticleCategoryDisplayed()).toBeTruthy()
    await expect(BlogPage.isFirstArticleTitleDisplayed()).toBeTruthy()
    await expect(BlogPage.isFirstArticleAuthorDisplayed()).toBeTruthy()

    await BlogPage.clickOnFirstArticle()

    //! inside
    await expect(BlogArticlePage.isBackToBlogLinkDisplayed()).toBeTruthy()

    await expect(
      BlogArticlePage.isCategoryAndLastUpdateDateDisplayed()
    ).toBeTruthy()

    await expect(BlogArticlePage.isHeadingDisplayed()).toBeTruthy()
    await expect(BlogArticlePage.isAuthorNameDisplayed()).toBeTruthy()
    await expect(BlogArticlePage.isShareOnSocialTextDisplayed()).toBeTruthy()
  })
})
