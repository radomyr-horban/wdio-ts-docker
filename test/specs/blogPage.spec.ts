import HomePage from '../pageobjects/homePage.js'
import BlogPage from '../pageobjects/blogPage.js'

describe('Blog page', () => {
  beforeEach(async () => {
    await browser.url('/')
    await HomePage.closeCookiesBox()
  })

  it('should display pagination', async () => {
    await HomePage.clickOnResourcesLink()
    await browser.pause(500) //!
    await HomePage.clickOnBlogLink()
    await expect(browser).toHaveUrlContaining('/resources')
    await expect(BlogPage.heading).toHaveTextContaining('Browse all articles, guides, and news')
    await expect(BlogPage.searchInput).toBeDisplayed()
    await expect(BlogPage.articlesSectionHeading).toHaveTextContaining('View all articles')
    await BlogPage.clickOnNextPageBtn()
    await expect(browser).toHaveUrlContaining('/page/2')
    await expect(BlogPage.articlesSectionHeading).toHaveTextContaining('(2)')
  })

  it('should allow a user to sort articles', async () => {
    await HomePage.clickOnResourcesLink()
    await browser.pause(500) //!
    await HomePage.clickOnBlogLink()
    await expect(browser).toHaveUrlContaining('/resources')
    await expect(BlogPage.heading).toHaveTextContaining('Browse all articles, guides, and news')
    await expect(BlogPage.searchInput).toBeDisplayed()
    await expect(BlogPage.articlesSectionHeading).toHaveTextContaining('View all articles')
    await BlogPage.clickOnFirstProductFilterOption()
    await expect(browser).toHaveUrlContaining('topic/voice')
    await BlogPage.clickOnFirstContentTypeFilterOption()
    await expect(browser).toHaveUrlContaining('category=partnerships')
  })
})
