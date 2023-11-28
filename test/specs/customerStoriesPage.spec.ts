import HomePage from '../pageobjects/homePage.js'
import CustomerStories from '../pageobjects/customerStoriesPage.js'
import CustomerStoriesArticle from '../pageobjects/customerStoriesArticlePage.js'

describe('Customer Stories page', () => {
  beforeEach(async () => {
    await browser.setWindowSize(1920, 1080)
    await browser.url('/')
    await HomePage.closeCookiesBox()
  })

  it('should open an article', async () => {
    await HomePage.clickOnResourcesLink()
    await HomePage.clickOnCustomerStoriesLink()

    await expect(browser).toHaveUrlContaining('/customer-stories')
    await expect(CustomerStories.heading).toBeDisplayed()
    await expect(CustomerStories.heading).toHaveTextContaining('Customer Stories')

    await CustomerStories.articlesSection.scrollIntoView()
    const firstArticleCardTitle = (await CustomerStories.firstArticleCardTitle).toLowerCase()

    await CustomerStories.clickOnFirstArticleCard()

    await expect(browser).toHaveUrlContaining(firstArticleCardTitle)
    await expect(CustomerStoriesArticle.subHeading).toBeDisplayed()
    await expect(CustomerStoriesArticle.heading).toBeDisplayed()
  })
})
