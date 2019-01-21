import { createYield } from "typescript";

describe('My first failing test', function() {
  it('Does not do much', function() {
    expect(true).to.equal(false);
  })
})

describe('My first passing test', function() {
  it('Does not do much', function() {
    expect(true).to.equal(true);
  })
})

describe('Test best practices', function() {
  it('Does not do much', function() {
    // Arrange - setup initial app state
    // - visit a web page
    // - query for an element
    // Act - take an action
    // - interact with that elememt
    // Assert - make an assertion
    // - make an assertion about page content
  })
})

describe('My first real test', function() {
  it('Visit the kitchen sink', function() {
    cy.visit('https://example.cypress.io');
  })
})

describe('My first real test', function() {
  it('Finds and elelment', function() {
    cy.visit('https://example.cypress.io');
    cy.contains('type');
  })
})

describe('My first real test', function() {
  it('Click an elelment', function() {
    cy.visit('https://example.cypress.io');
    cy.contains('type').click();
  })
})

describe('My first real test', function() {
  it('Makes an assertion', function() {
    cy.visit('https://example.cypress.io');
    cy.contains('type').click();
    cy.url().should('include', '/commands/actions')
  })
})

describe('My first real test', function() {
  it('Gets, types and asserts', function() {
    cy.visit('https://example.cypress.io');
    cy.contains('type').click();
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email').type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})
