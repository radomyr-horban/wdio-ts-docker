import HomePage from '../pageobjects/homePage.js'
import BlogPage from '../pageobjects/blogPage.js'
import BlogArticlePage from '../pageobjects/blogArticlePage.js'

describe.skip('Blog article page', () => {
  beforeEach(async () => {
    await browser.url('/')
    await HomePage.closeCookiesBox()
  })

  it('should display main elements', async () => {
    await HomePage.clickOnResourcesLink()
    await HomePage.clickOnBlogLink()
    await expect(browser).toHaveUrlContaining('/resources')
    await expect(browser).toHaveUrlContaining('/resources')
    await expect(BlogPage.heading).toHaveTextContaining('Browse all articles, guides, and news')
    await expect(BlogPage.searchInput).toBeDisplayed()
    await expect(BlogPage.articlesSectionHeading).toHaveTextContaining('View all articles')

    //! article
    await expect(BlogPage.firstArticleCategory).toBeDisplayed()
    await expect(BlogPage.firstArticleTitle).toBeDisplayed()
    await expect(BlogPage.firstArticleAuthor).toBeDisplayed()
    await BlogPage.clickOnFirstArticle()

    //! inside
    await expect(BlogArticlePage.backToBlogLink).toBeDisplayed()
    await expect(BlogArticlePage.categoryAndLastUpdateDate).toBeDisplayed()
    await expect(BlogArticlePage.heading).toBeDisplayed()
    await expect(BlogArticlePage.authorName).toBeDisplayed()
    await expect(BlogArticlePage.shareOnSocialText).toBeDisplayed()
  })
})
