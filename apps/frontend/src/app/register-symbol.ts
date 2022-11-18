import { UseCase } from './use-case';

export class RegisterSymbol implements UseCase {
  private pattern = /^(?<key>\w+) is (?<value>[IVXLCDM])$/;
  private data: { key: string; value: string } | undefined;

  identify(phrase: string): boolean {
    return this.pattern.test(phrase);
  }

  initialize(phrase: string): void {
    this.data = this.pattern.exec(phrase)?.groups as
      | { key: string; value: string }
      | undefined;
  }

  getData() {
    return this.data;
  }
}
