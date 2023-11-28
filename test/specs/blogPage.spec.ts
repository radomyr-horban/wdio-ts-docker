import HomePage from '../pageobjects/homePage.js'
import BlogPage from '../pageobjects/blogPage.js'

import blogPage from '../constants/blogPage.json' assert { type: 'json' }

describe('Blog page', () => {
  beforeEach(async () => {
    await browser.setWindowSize(1920, 1080)
    await browser.url('/')
    await HomePage.closeCookiesBox()
  })

  it('should display pagination', async () => {
    await HomePage.clickOnResourcesLink()
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
    await HomePage.clickOnBlogLink()

    await expect(browser).toHaveUrlContaining('/resources')
    await expect(BlogPage.heading).toHaveTextContaining('Browse all articles, guides, and news')
    await expect(BlogPage.searchInput).toBeDisplayed()
    await expect(BlogPage.articlesSectionHeading).toHaveTextContaining('View all articles')

    await BlogPage.clickOnFirstProductFilterOption()

    await expect(browser).toHaveUrlContaining('topic/voice')

    await BlogPage.firstContentTypeFilterOption.click()
    await expect(browser).toHaveUrlContaining('category=partnerships')
  })

  it('should find results for a valid sarch value', async () => {
    await HomePage.clickOnResourcesLink()
    await HomePage.clickOnBlogLink()

    await expect(browser).toHaveUrlContaining('/resources')
    await expect(BlogPage.heading).toHaveTextContaining('Browse all articles, guides, and news')
    await expect(BlogPage.searchInput).toBeDisplayed()

    await BlogPage.setSearchInput(blogPage.searchWord)
    await browser.keys('Enter')

    await expect(browser).toHaveUrlContaining(blogPage.searchWord)
    await expect(BlogPage.searchResultsText).toHaveTextContaining(blogPage.searchWord)
    await expect(BlogPage.searchInput).toHaveValue(blogPage.searchWord)
    expect((await BlogPage.searchResultCards.length) > 0).toBe(true)
  })

  it('should NOT find results for an invalid sarch value', async () => {
    await HomePage.clickOnResourcesLink()
    await HomePage.clickOnBlogLink()

    await expect(browser).toHaveUrlContaining('/resources')
    await expect(BlogPage.heading).toHaveTextContaining('Browse all articles, guides, and news')
    await expect(BlogPage.searchInput).toBeDisplayed()

    await BlogPage.setSearchInput(blogPage.invalidSearchWord)
    await browser.keys('Enter')

    await expect(browser).toHaveUrlContaining(blogPage.invalidSearchWord)
    await expect(BlogPage.searchResultsText).toHaveTextContaining(blogPage.invalidSearchWord)
    await expect(BlogPage.searchInput).toHaveValue(blogPage.invalidSearchWord)
    expect((await BlogPage.searchResultCards.length) > 0).toBe(false)
  })
})
