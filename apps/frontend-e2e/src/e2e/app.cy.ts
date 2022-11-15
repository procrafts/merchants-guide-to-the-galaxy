import { getTitle } from '../support/app.po';

describe('frontend', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getTitle().contains("MERCHANT'S GUIDE TO THE GALAXY");
  });
});
