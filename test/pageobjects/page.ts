// import { browser, $ } from '@wdio/globals'

export default class Page {
  public async getElement(element: string) {
    return $(element)
  }

  public async getAllElements(element: string) {
    return $$(element)
  }

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
    value: number
  ): Promise<void> {
    await this.waitUntilElementDisplayed(element)
    const elem = await this.getElement(element)
    await elem.setValue(value)
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
}
