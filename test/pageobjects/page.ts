// import { browser, $ } from '@wdio/globals'

interface UserData {
  firstName: string
  lastName: string
  email: string
  website: string
}

export default class Page {
  public async getElement(element: string): Promise<WebdriverIO.Element> {
    return $(element)
  }

  public async getAllElements(element: string) {
    return $$(element)
  }

  // public async getFirstElement(element: string) {
  //   const elements = await this.getAllElements(element)
  //   return elements[0]
  // }

  // public async scrollElementIntoView(element: string): Promise<void> {
  //   const elem = await this.getElement(element)
  //   await elem.scrollIntoView()
  // }

  public async getListSize(element: string): Promise<number> {
    const elements = await this.getAllElements(element)

    if (elements && elements.length > 0) {
      return elements.length
    } else {
      throw new Error('No elements found with the specified selector.')
    }
  }

  public async isElementDisplayed(element: string): Promise<boolean> {
    const elem = await this.getElement(element)
    return elem.isDisplayed()
  }

  public async isElementClickable(element: string): Promise<boolean> {
    const elem = await this.getElement(element)
    return elem.isClickable()
  }

  public async isElementSelected(element: string): Promise<boolean> {
    const elem = await this.getElement(element)
    return elem.isSelected()
  }

  public async waitUntilElementDisplayed(element: string): Promise<void> {
    await browser.waitUntil(() => {
      return this.isElementDisplayed(element)
    })
  }

  public async getElementText(element: string): Promise<string> {
    await this.waitUntilElementDisplayed(element)
    const elem = await this.getElement(element)

    return elem.getText()
  }

  public async setElementInputValue(
    element: string,
    value: string | number
  ): Promise<void> {
    await this.waitUntilElementDisplayed(element)
    const elem = await this.getElement(element)
    await elem.setValue(value)
  }
  public async clearElementInputValue(element: string): Promise<void> {
    await this.waitUntilElementDisplayed(element)
    const elem = await this.getElement(element)
    await elem.clearValue()
  }

  public async clickElement(element: string): Promise<void> {
    const elem = await this.getElement(element)

    await elem.waitForClickable()

    await elem.click()
  }

  public async doesElementContainText(
    element: string,
    text: string
  ): Promise<boolean> {
    const elementText = await this.getElementText(element)
    return elementText.includes(text)
  }

  //todo: helpers
  public async closeCookiesBox(): Promise<void> {
    // const acceptCookiesButton = await $('div#onetrust-close-btn-container')
    const closeCookiesBoxButton = await this.getElement(
      'div#onetrust-close-btn-container'
    )

    if (closeCookiesBoxButton && (await closeCookiesBoxButton.isDisplayed())) {
      await closeCookiesBoxButton.click()
    }
  }

  public async generateUserData(): Promise<UserData> {
    const randomString = (length: number): string => {
      let result = ''
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      const charactersLength = characters.length
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        )
      }
      return result
    }

    const randomEmail: string = `${randomString(8)}@gmail.com`
    const randomFirstName: string = randomString(6)
    const randomLastName: string = randomString(6)
    const randomWebsite: string = randomString(6)

    return {
      firstName: randomFirstName,
      lastName: randomLastName,
      email: randomEmail,
      website: randomWebsite,
    }
  }
}
