const page = {
  title: () => cy.get('h1.title'),
  tabContent: () => cy.byDataCy('TabContent'),
  tabs: () => cy.byDataCy('Tab'),
  links: () => cy.byDataCy('TabLink'),
};

describe('Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have 3 tabs with the links', () => {
    page.tabs().should('have.length', 3);
    page.links().should('have.length', 3);
  });

  it('should have the first tab selected by default', () => {
    page.title().should('have.text', 'Selected tab is Tab 1');
  });

  it('should display the content from the first tab by default', () => {
    page.tabContent().should('have.text', 'Some text 1');
  });

  it('should display the title of the second tab in the header after clicking it', () => {
    page.links().eq(1).click();

    page.title().should('have.text', 'Selected tab is Tab 2');
  });

  it('should display the content from the second tab after it was selected', () => {
    page.links().eq(1).click();

    page.tabContent().should('have.text', 'Some text 2');
  });

  it('should display the title of the third tab in the header after clicking it', () => {
    page.links().eq(2).click();

    page.title().should('have.text', 'Selected tab is Tab 3');
  });

  it('should display the content from the third tab after it was selected', () => {
    page.links().eq(2).click();

    page.tabContent().should('have.text', 'Some text 3');
  });

  it('should display the title of the first tab if it was clicked after another tab', () => {
    page.links().eq(1).click();
    page.links().eq(0).click();

    page.title().should('have.text', 'Selected tab is Tab 1');
  });
});
