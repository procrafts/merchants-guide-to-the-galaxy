import { UseCase } from './use-case';

export interface ProfessIncomprehensionModel {
  phrase: string;
}
export class ProfessIncomprehension extends UseCase<ProfessIncomprehensionModel> {
  protected pattern = /^(?<phrase>.*)$/;
}
