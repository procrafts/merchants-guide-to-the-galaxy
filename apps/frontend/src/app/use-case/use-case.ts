export abstract class UseCase<Model = unknown> {
  protected abstract pattern: RegExp;
  protected data: Model | undefined;

  identify(phrase: string): boolean {
    return this.pattern.test(phrase);
  }

  initialize(phrase: string): void {
    this.data = this.pattern.exec(phrase)?.groups as Model;
  }

  getData(): Model | undefined {
    return this.data;
  }
}
