import Page from './page.js'

class ThankYouPage extends Page {
  get heading() {
    return $('main h1')
  }

  get heroOverviewText() {
    return $('main > section > div > div > p')
  }
}

export default new ThankYouPage()
