export interface UseCase<Model = unknown> {
  identify(phrase: string): boolean;
  initialize(phrase: string): void;
  getData(): Model;
}
