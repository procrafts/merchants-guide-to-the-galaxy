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

  it('should profess incomprehension', () => {
    getInput().type(
      'how much wood could a woodchuck chuck if a woodchuck could chuck wood ?'
    );
    getSubmitButton().click();
    getFirstOutput().contains('I have no idea what you are talking about');
  });

  it('should count alien numerals', () => {
    getInput().type('glob is I');
    getSubmitButton().click();
    getInput().type('prok is V');
    getSubmitButton().click();
    getInput().type('pish is X');
    getSubmitButton().click();
    getInput().type('tegj is L');
    getSubmitButton().click();
    getInput().type('how much is pish tegj glob glob ?');
    getSubmitButton().click();
    getFirstOutput().contains('pish tegj glob glob is 42');
  });
});
