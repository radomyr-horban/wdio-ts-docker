import Page from './page.js'
import { $ } from '@wdio/globals'

class CustomerStoriesArticlePage extends Page {
  public get subHeading() {
    return $('main > section:first-child strong')
  }

  public get heading() {
    return $('main h1')
  }
}

export default new CustomerStoriesArticlePage()
