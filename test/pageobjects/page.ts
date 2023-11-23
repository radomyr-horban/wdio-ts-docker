// import { browser, $ } from '@wdio/globals'

interface UserData {
  firstName: string
  lastName: string
  email: string
  website: string
}

export default class Page {
  public async clickElement(element: Promise<WebdriverIO.Element>): Promise<void> {
    await (await element).waitForClickable()

    await (await element).click()
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
}
