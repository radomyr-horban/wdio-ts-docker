import Page from './page.js'

class ThankYouPage extends Page {
  public get heading() {
    return $('main h1')
  }

  public get heroOverviewText() {
    return $('main > section > div > div > p')
  }
}

export default new ThankYouPage()
