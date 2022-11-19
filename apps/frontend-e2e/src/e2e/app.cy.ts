import {
  enterCommand,
  getAllOutputs,
  getFirstOutput,
  getNthOutput,
  getTitle,
} from '../support/app.po';

describe('frontend', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getTitle().should('contain.text', "MERCHANT'S GUIDE TO THE GALAXY");
  });

  it('should profess incomprehension', () => {
    enterCommand(
      'how much wood could a woodchuck chuck if a woodchuck could chuck wood ?'
    );

    getFirstOutput().should(
      'contain.text',
      'I have no idea what you are talking about'
    );
  });

  it('should count alien numerals', () => {
    enterCommand('glob is I');
    enterCommand('pish is X');
    enterCommand('tegj is L');
    enterCommand('how much is pish tegj glob glob ?');

    getFirstOutput().should('contain.text', 'pish tegj glob glob is 42');
  });

  it('should calculate price', () => {
    enterCommand('glob is I');
    enterCommand('prok is V');
    enterCommand('glob glob Silver is 34 Credits');
    enterCommand('how many Credits is glob prok Silver ?');

    getFirstOutput().should('contain.text', 'glob prok Silver is 68 Credits');
  });

  it('should handle challenge input correctly', () => {
    enterCommand('glob is I');
    enterCommand('prok is V');
    enterCommand('pish is X');
    enterCommand('tegj is L');
    enterCommand('glob glob Silver is 34 Credits');
    enterCommand('glob prok Gold is 57800 Credits');
    enterCommand('pish pish Iron is 3910 Credits');
    enterCommand('how much is pish tegj glob glob ?');
    enterCommand('how many Credits is glob prok Silver ?');
    enterCommand('how many Credits is glob prok Gold ?');
    enterCommand('how many Credits is glob prok Iron ?');
    enterCommand(
      'how much wood could a woodchuck chuck if a woodchuck could chuck wood ?'
    );

    getNthOutput(1).should('contain.text', 'pish tegj glob glob is 42');
    getNthOutput(2).should('contain.text', 'glob prok Silver is 68 Credits');
    getNthOutput(3).should('contain.text', 'glob prok Gold is 57800 Credits');
    getNthOutput(4).should('contain.text', 'glob prok Iron is 782 Credits');
    getNthOutput(5).should(
      'contain.text',
      'I have no idea what you are talking about'
    );
    getAllOutputs().should('have.lengthOf', 5);
  });
});
