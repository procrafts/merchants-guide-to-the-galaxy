type IdentifyFn = (phrase: string) => boolean;
type ReadDataFn<Model> = (phrase: string) => Model;
export const createIdentify = (pattern: RegExp) => (phrase: string) =>
  pattern.test(phrase);
export const createReadData =
  <Model>(pattern: RegExp) =>
  (phrase: string) =>
    pattern.exec(phrase)?.groups as Model;

export interface UseCaseParser<Model> {
  name: string;
  identify: IdentifyFn;
  readData: ReadDataFn<Model>;
}

export interface UseCase<Model> {
  name: string;
  data: Model;
}

export const createIsSpecificUseCase =
  <Model>(parser: UseCaseParser<Model>) =>
  (useCase?: UseCase<unknown>): useCase is UseCase<Model> =>
    useCase?.name === parser.name;
