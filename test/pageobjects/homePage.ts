// import { $ } from '@wdio/globals'

import Page from './page.js'

class HomePage extends Page {
  //! navigation
  async clickOnResourcesLink(): Promise<void> {
    await this.clickElement('//nav//span[text()="Resources"]')
  }

  async clickOnSolutionsLink(): Promise<void> {
    await this.clickElement('//nav//span[text()="Solutions"]')
  }

  async clickOnPricingLink(): Promise<void> {
    await this.clickElement('//nav//span[text()="Pricing"]')
  }

  async clickOnWhyTelnyxLink(): Promise<void> {
    await this.clickElement('//nav//span[text()="Why Telnyx"]')
  }

  async clickOnProductsLink(): Promise<void> {
    await this.clickElement('//nav//span[text()="Products"]')
  }

  //! Sub-navigation
  async clickOnSupportCenterLink(): Promise<void> {
    await this.clickElement(
      '[role="menuitem"] > a[href="https://support.telnyx.com/en/"]'
    )
  }

  async clickOnBlogLink(): Promise<void> {
    await this.clickElement('[role="menuitem"] > a[href="/resources"]')
  }

  async clickOnGlobalNumbersLink(): Promise<void> {
    await this.clickElement(
      '[role="menuitem"] > a[href="/products/phone-numbers"]'
    )
  }

  async clickOnGlobalCoverageLink(): Promise<void> {
    await this.clickElement('[role="menuitem"] > a[href="/global-coverage"]')
  }

  async clickOnIntegrationsLink(): Promise<void> {
    await this.clickElement(
      '[role="menuitem"] > a[href="https://marketplace.telnyx.com"]'
    )
  }

  async clickOnMicrosoftTeamsLink(): Promise<void> {
    await this.clickElement(
      '[role="menuitem"] > a[href="/products/enterprise-integrations-ms-teams"]'
    )
  }

  async clickOnIoTSimCardsLink(): Promise<void> {
    await this.clickElement(
      '[role="menuitem"] > a[href="/pricing/iot-data-plans"]'
    )
  }

  //! Footer
  async clickOnReleaseNotesLink(): Promise<void> {
    await this.clickElement('footer a[href="/release-notes"]')
  }

  async clickOnTelnyxVsTwilioLink(): Promise<void> {
    await this.clickElement('footer a[href="/the-better-twilio-alternative"]')
  }
}

export default new HomePage()
