import { $ } from '@wdio/globals'

export async function acceptCookiesHelper(): Promise<void> {
  const acceptCookiesButton = await $('div#onetrust-close-btn-container')

  if (acceptCookiesButton && (await acceptCookiesButton.isDisplayed())) {
    await acceptCookiesButton.click()
  }
}
