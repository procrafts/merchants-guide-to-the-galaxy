export const getTitle = () => cy.get('h1');
export const getInput = () => cy.get('[data-testid="input"]');
export const getSubmitButton = () => cy.get('[data-testid="submit"]');
export const enterCommand = (text: string) => {
  getInput().type(text);
  getSubmitButton().click();
};
export const getFirstOutput = () => cy.get('[data-testid="output"] > p:first');
export const getAllOutputs = () => cy.get('[data-testid="output"] > p');
export const getNthOutput = (n: number) =>
  cy.get(`[data-testid="output"] > p:nth-of-type(${n})`);
