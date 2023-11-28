import Page from './page.js'
import { $ } from '@wdio/globals'

class CustomerStoriesPage extends Page {
  public get heading() {
    return $('main h1')
  }

  public get articlesSection() {
    return $('section[id="3nwNoEHJNTNY1tqO6i0SM3"]')
  }

  public get firstArticleCard() {
    return $('section[id="3nwNoEHJNTNY1tqO6i0SM3"] > div:nth-child(2)')
  }

  public get firstArticleCardTitle(): Promise<string> {
    return $('section[id="3nwNoEHJNTNY1tqO6i0SM3"] > div:nth-child(2) h3').getText()
  }

  public async clickOnFirstArticleCard(): Promise<void> {
    await this.clickElement(await this.firstArticleCard)
  }
}

export default new CustomerStoriesPage()
