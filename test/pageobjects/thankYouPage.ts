import Page from './page.js'

class ThankYouPage extends Page {
  get heading() {
    return $('main h1')
  }
  //   public isHeadingDisplayed(): Promise<boolean> {
  //     return this.heading('main h1')
  //   }

  get heroOverviewText() {
    return $('main > section > div > div > p')
  }
  //   public isHeroOverviewTextDisplayed(): Promise<boolean> {
  //     return this.isElementDisplayed('main > section > div > div > p')
  //   }
}

export default new ThankYouPage()
