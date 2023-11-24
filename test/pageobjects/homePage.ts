import { $ } from '@wdio/globals'
import Page from './page.js'

class HomePage extends Page {
  //! 1. Navigation
  public get productsLink() {
    // return $('//nav//span[text()="Products"]')
    // return $('header > div > div>div:nth-child(3) > nav>button:nth-child(1)')
    return $('header > div > div>div:nth-child(3) > nav > button:nth-of-type(1)')
  }

  public get solutionsLink() {
    // return $('//nav//span[text()="Solutions"]')
    return $('header > div > div>div:nth-child(3) [href="/solutions"]')
  }

  public get pricingLink() {
    // return $('//nav//span[text()="Pricing"]')
    return $('header > div > div>div:nth-child(3) > nav > button:nth-of-type(2)')
  }

  public get whyTelnyxLink() {
    // return $('//nav//span[text()="Why Telnyx"]')
    return $('header > div > div>div:nth-child(3) > nav > button:nth-of-type(3)')
  }

  public get resourcesLink() {
    // return $('//nav//span[text()="Resources"]')
    // return $('//*[@id="radix-:Rmljm:"]/span/span/span')
    return $('header > div > div>div:nth-child(3) > nav > button:nth-of-type(4)')
  }

  //! 2. Sub-navigation
  //! Products
  public get microsoftTeamsLink() {
    return $('[role="menuitem"] > a[href="/products/enterprise-integrations-ms-teams"]')
  }

  public get pricingGlobalNumbersLink() {
    return $('[role="menuitem"] > a[href="/pricing/numbers"]')
  }

  //! Pricing
  public get ioTSimCardsLink() {
    return $('[role="menuitem"] > a[href="/pricing/iot-data-plans"]')
  }

  //! Why Telnyx
  public get globalCoverageLink() {
    return $('[role="menuitem"] > a[href="/global-coverage"]')
  }

  public get integrationsLink() {
    return $('[role="menuitem"] > a[href="https://marketplace.telnyx.com"]')
  }

  //! Resources
  public get blogLink() {
    return $('[role="menuitem"] > a[href="/resources"]')
  }

  public get supportCenterLink() {
    return $('[role="menuitem"] > a[href="https://support.telnyx.com/en/"]')
  }

  //! 3. Footer
  public get releaseNotesLink() {
    return $('footer a[href="/release-notes"]')
  }

  public get telnyxVsTwilioLink() {
    return $('footer a[href="/the-better-twilio-alternative"]')
  }

  public async clickOnResourcesLink(): Promise<void> {
    await this.clickElement(await this.resourcesLink)
  }

  public async clickOnSolutionsLink(): Promise<void> {
    await this.clickElement(await this.solutionsLink)
  }

  public async clickOnPricingLink(): Promise<void> {
    await this.clickElement(await this.pricingLink)
  }

  public async clickOnWhyTelnyxLink(): Promise<void> {
    await this.clickElement(await this.whyTelnyxLink)
  }

  public async clickOnProductsLink(): Promise<void> {
    await this.clickElement(await this.productsLink)
  }

  public async clickOnGlobalCoverageLink(): Promise<void> {
    await this.clickElement(await this.globalCoverageLink)
  }

  public async clickOnSupportCenterLink(): Promise<void> {
    await this.clickElement(await this.supportCenterLink)
  }

  public async clickOnBlogLink(): Promise<void> {
    await this.clickElement(await this.blogLink)
  }

  public async clickOnPricingGlobalNumbersLink(): Promise<void> {
    await this.clickElement(await this.pricingGlobalNumbersLink)
  }

  public async clickOnIntegrationsLink(): Promise<void> {
    await this.clickElement(await this.integrationsLink)
  }

  public async clickOnMicrosoftTeamsLink(): Promise<void> {
    await this.clickElement(await this.microsoftTeamsLink)
  }

  public async clickOnIoTSimCardsLink(): Promise<void> {
    await this.clickElement(await this.ioTSimCardsLink)
  }

  public async clickOnReleaseNotesLink(): Promise<void> {
    await this.clickElement(await this.releaseNotesLink)
  }
  public async clickOnTelnyxVsTwilioLink(): Promise<void> {
    await this.clickElement(await this.telnyxVsTwilioLink)
  }
}

export default new HomePage()
