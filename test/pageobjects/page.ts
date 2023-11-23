import { UserData } from '../types'

export default class Page {
  public async clickElement(element: WebdriverIO.Element): Promise<void> {
    await element.waitForClickable()
    await element.click()
  }

  public async closeCookiesBox(): Promise<void> {
    const closeCookiesBoxButton = await $('div#onetrust-close-btn-container')

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
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
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

  public async isErrorAlertDisplayed(inputField: WebdriverIO.Element): Promise<boolean> {
    const inputId = await inputField.getAttribute('id')
    return (await $(`input[id="${inputId}"]+div.mktoError`)).isDisplayed()
  }

  //! Commands
  public async verifyListItemsHrefs(
    elementsArray: WebdriverIO.ElementArray,
    hrefObject: Record<string, string>
  ): Promise<void> {
    expect(elementsArray.length).toBe(Object.keys(hrefObject).length)

    for (const li of elementsArray) {
      const title = await li.getText()
      const expectedHref = hrefObject[title]
      const actualHref = await li.getAttribute('href')
      expect(actualHref).toBe(expectedHref)
    }
  }

  public async verifyListItemsTitles(
    elementsArray: WebdriverIO.ElementArray,
    titlesObject: Record<string, string>
  ): Promise<void> {
    expect(elementsArray.length).toBe(Object.keys(titlesObject).length)
    for (let i = 0; i < elementsArray.length; i++) {
      const title = await elementsArray[i].getText()
      expect(Object.keys(titlesObject)).toContain(title.trim())
    }
  }
}
