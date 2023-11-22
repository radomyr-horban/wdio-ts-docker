import Page from './page.js'
import { $ } from '@wdio/globals'

class BlogPage extends Page {
  get heading() {
    return $('main h1')
  }

  get subHeading() {
    return $('header h2 > span')
  }

  get filterDropdown() {
    return $('#blog-filter')
  }

  get filterDropdownList() {
    return $('div[role="listbox"]')
  }

  get filterDropdownListOptions() {
    return $('div[role="option"] a')
  }

  get searchInput() {
    return $('input[id="search"]')
  }

  get articlesSectionHeading() {
    return $('#articles h2')
  }

  get paginationNav() {
    return $('nav[aria-label="pagination"]')
  }

  get nextPageLink() {
    return $('svg[aria-describedby="go-to-next-page"]')
  }

  get nextPageLinkTitle() {
    return $('title[id="go-to-next-page"]')
  }

  //! article
  // get firstArticle() {
  //   return $('#articles ul li a').first()
  // }

  get firstArticleCategory() {
    return $('#articles ul li:first-child a strong')
  }

  get firstArticleTitle() {
    return $('#articles ul li:first-child a h3')
  }

  get firstArticleAuthor() {
    return $('#articles ul li:first-child a p')
  }

  get firstProductFilterOption() {
    return $('[id="articles"] > div > div > div:first-child a')
  }

  public async clickOnFirstProductFilterOption(): Promise<void> {
    await this.clickElement(this.firstProductFilterOption)
  }

  get firstContentTypeFilterOption() {
    return $('[id="articles"] > div > div > div:last-child a')
  }

  public async clickOnFirstContentTypeFilterOption(): Promise<void> {
    await this.clickElement(this.firstContentTypeFilterOption)
  }

  get nextPageBtn() {
    return $('svg[aria-describedby="go-to-next-page"]')
  }

  public async clickOnNextPageBtn(): Promise<void> {
    await this.clickElement(this.nextPageBtn)
  }

  get firstArticleLink() {
    return $('#articles ul li:first-child a')
  }

  public async clickOnFirstArticle(): Promise<void> {
    await this.clickElement(this.firstArticleLink)
  }
}

export default new BlogPage()
