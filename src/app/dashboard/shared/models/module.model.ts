import { ThemeModel } from 'src/app/dashboard/shared/models/theme.model';

export interface ModuleModel {
  title: string;
  desc?: string;
  number?: number;
  themes?: ThemeModel[];
}
