import Page from './page.js'
import { $ } from '@wdio/globals'

class BlogPage extends Page {
  public get heading() {
    return $('main h1')
  }

  public get subHeading() {
    return $('header h2 > span')
  }

  public get filterDropdown() {
    return $('#blog-filter')
  }

  public get filterDropdownList() {
    return $('div[role="listbox"]')
  }

  public get filterDropdownListOptions() {
    return $('div[role="option"] a')
  }

  public get searchInput() {
    return $('input[id="search"]')
  }

  public get articlesSectionHeading() {
    return $('#articles h2')
  }

  public get paginationNav() {
    return $('nav[aria-label="pagination"]')
  }

  public get nextPageLink() {
    return $('svg[aria-describedby="go-to-next-page"]')
  }

  public get nextPageLinkTitle() {
    return $('title[id="go-to-next-page"]')
  }

  //! article
  public get firstArticleCategory() {
    return $('#articles ul li:first-child a strong')
  }

  public get firstArticleTitle() {
    return $('#articles ul li:first-child a h3')
  }

  public get firstArticleAuthor() {
    return $('#articles ul li:first-child a p')
  }

  public get firstProductFilterOption() {
    return $('[id="articles"] > div > div > div:first-child a')
  }

  public get firstContentTypeFilterOption() {
    return $('[id="articles"] > div > div > div:last-child a')
  }
  public get nextPageBtn() {
    return $('svg[aria-describedby="go-to-next-page"]')
  }

  public get firstArticleLink() {
    return $('#articles ul li:first-child a')
  }

  public async clickOnFirstProductFilterOption(): Promise<void> {
    await this.clickElement(await this.firstProductFilterOption)
  }

  public async clickOnFirstContentTypeFilterOption(): Promise<void> {
    await this.clickElement(await this.firstContentTypeFilterOption)
  }

  public async clickOnNextPageBtn(): Promise<void> {
    await this.clickElement(await this.nextPageBtn)
  }

  public async clickOnFirstArticle(): Promise<void> {
    await this.clickElement(await this.firstArticleLink)
  }
}

export default new BlogPage()
