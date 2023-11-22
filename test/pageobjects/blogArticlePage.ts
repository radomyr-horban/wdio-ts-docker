import Page from './page.js'

class BlogArticlePage extends Page {
  public get backToBlogLink() {
    return $('main a[href="/resources"]')
  }
  public get categoryAndLastUpdateDate() {
    return $('main>div:first-child strong')
  }
  public get heading() {
    return $('main h1')
  }
  public get authorName() {
    return $('div [data-author-initials]+p')
  }
  public get shareOnSocialText() {
    return $('//span[text()="Share on Social"]')
  }
}

export default new BlogArticlePage()
