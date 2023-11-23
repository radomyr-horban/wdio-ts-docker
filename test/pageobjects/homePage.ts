import { $ } from '@wdio/globals'
import Page from './page.js'

class HomePage extends Page {
  //! navigation
  get resourcesLink() {
    return $('//nav//span[text()="Resources"]')
  }

  async clickOnResourcesLink(): Promise<void> {
    await this.clickElement(this.resourcesLink)
  }

  get solutionsLink() {
    return $('//nav//span[text()="Solutions"]')
  }

  async clickOnSolutionsLink(): Promise<void> {
    await this.clickElement(this.solutionsLink)
  }

  get pricingLink() {
    return $('//nav//span[text()="Pricing"]')
  }

  async clickOnPricingLink(): Promise<void> {
    await this.clickElement(this.pricingLink)
  }

  get whyTelnyxLink() {
    return $('//nav//span[text()="Why Telnyx"]')
  }

  async clickOnWhyTelnyxLink(): Promise<void> {
    await this.clickElement(this.whyTelnyxLink)
  }

  get productsLink() {
    return $('//nav//span[text()="Products"]')
  }

  async clickOnProductsLink(): Promise<void> {
    await this.clickElement(this.productsLink)
  }

  //! Sub-navigation
  get supportCenterLink() {
    return $('[role="menuitem"] > a[href="https://support.telnyx.com/en/"]')
  }

  async clickOnSupportCenterLink(): Promise<void> {
    await this.clickElement(this.supportCenterLink)
  }

  get blogLink() {
    return $('[role="menuitem"] > a[href="/resources"]')
  }

  async clickOnBlogLink(): Promise<void> {
    await this.clickElement(this.blogLink)
  }

  get globalNumbersLink() {
    return $('[role="menuitem"] > a[href="/products/phone-numbers"]')
  }

  async clickOnGlobalNumbersLink(): Promise<void> {
    await this.clickElement(this.globalNumbersLink)
  }

  get globalCoverageLink() {
    return $('[role="menuitem"] > a[href="/global-coverage"]')
  }

  async clickOnGlobalCoverageLink(): Promise<void> {
    await this.clickElement(this.globalCoverageLink)
  }

  get integrationsLink() {
    return $('[role="menuitem"] > a[href="https://marketplace.telnyx.com"]')
  }

  async clickOnIntegrationsLink(): Promise<void> {
    await this.clickElement(this.integrationsLink)
  }

  get microsoftTeamsLink() {
    return $('[role="menuitem"] > a[href="/products/enterprise-integrations-ms-teams"]')
  }

  async clickOnMicrosoftTeamsLink(): Promise<void> {
    await this.clickElement(this.microsoftTeamsLink)
  }

  get ioTSimCardsLink() {
    return $('[role="menuitem"] > a[href="/pricing/iot-data-plans"]')
  }

  async clickOnIoTSimCardsLink(): Promise<void> {
    await this.clickElement(this.ioTSimCardsLink)
  }

  //! Footer
  get releaseNotesLink() {
    return $('footer a[href="/release-notes"]')
  }

  async clickOnReleaseNotesLink(): Promise<void> {
    await this.clickElement(this.releaseNotesLink)
  }

  get telnyxVsTwilioLink() {
    return $('footer a[href="/the-better-twilio-alternative"]')
  }

  async clickOnTelnyxVsTwilioLink(): Promise<void> {
    await this.clickElement(this.telnyxVsTwilioLink)
  }
}

export default new HomePage()
