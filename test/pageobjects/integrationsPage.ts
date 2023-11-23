import Page from './page.js'

class IntegrationsPage extends Page {
  get heading() {
    return $('main h1')
  }

  get heroOverviewText() {
    return $('h2.description > p')
  }

  get integrationsSection() {
    return $('div.sidebar-section.collection-menu-section')
  }

  get integrationsSectionTitle() {
    return $('div.sidebar-section.collection-menu-section > h4')
  }

  get integrationsSectionListItems() {
    return $$('div.sidebar-section.collection-menu-section > ul > li a')
  }

  get categoriesSection() {
    return $('div.sidebar-section.category-menu-section')
  }

  get categoriesSectionTitle() {
    return $('div.sidebar-section.category-menu-section > h4')
  }

  get categoriesSectionListItems() {
    return $$('div.sidebar-section.category-menu-section > ul > li a')
  }
}

export default new IntegrationsPage()
