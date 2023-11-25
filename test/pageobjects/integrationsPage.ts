import Page from './page.js'

class IntegrationsPage extends Page {
  public get heading() {
    return $('main h1')
  }

  public get heroOverviewText() {
    return $('h2.description > p')
  }

  public get integrationsSection() {
    return $('div.sidebar-section.collection-menu-section')
  }

  public get integrationsSectionTitle() {
    return $('div.sidebar-section.collection-menu-section > h4')
  }

  public get integrationsSectionListItems() {
    return $$('div.sidebar-section.collection-menu-section > ul > li a')
  }

  public get categoriesSection() {
    return $('div.sidebar-section.category-menu-section')
  }

  public get categoriesSectionTitle() {
    return $('div.sidebar-section.category-menu-section > h4')
  }

  public get categoriesSectionListItems() {
    return $$('div.sidebar-section.category-menu-section > ul > li a')
  }
}

export default new IntegrationsPage()
