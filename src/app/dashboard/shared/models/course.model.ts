import { ModuleModel } from 'src/app/dashboard/shared/models/module.model';

export interface CourseModel {
  id?: number;
  title?: string;
  desc?: string;
  modules?: ModuleModel[];
  isPublished?: boolean;
  publicationDate?: Date;
}
