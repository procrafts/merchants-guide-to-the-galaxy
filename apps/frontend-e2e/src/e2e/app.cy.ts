import {
  getFirstOutput,
  getInput,
  getSubmitButton,
  getTitle,
} from '../support/app.po';

describe('frontend', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getTitle().contains("MERCHANT'S GUIDE TO THE GALAXY");
  });

  it('should display welcome message', () => {
    getInput().type(
      'how much wood could a woodchuck chuck if a woodchuck could chuck wood ?'
    );
    getSubmitButton().click();
    getFirstOutput().contains('I have no idea what you are talking about');
  });
});
