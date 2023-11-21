import Page from './page.js'

class ThankYouPage extends Page {
  // Elements
  // get heading() {
  //   return this.getElement('main h1')
  // }
  public isHeadingDisplayed(): Promise<boolean> {
    return this.isElementDisplayed('main h1')
  }

  // get heroOverviewText() {
  //   return this.getElement('main > section > div > div > p')
  // }
  public isHeroOverviewTextDisplayed(): Promise<boolean> {
    return this.isElementDisplayed('main > section > div > div > p')
  }
}

export default new ThankYouPage()
