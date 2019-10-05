import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesRoutingModule } from 'src/app/dashboard/courses/courses-routing.module';
import { CoursesComponent } from 'src/app/dashboard/courses/courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseFormBasicInfoComponent } from './components/course-form/course-form-basic-info/course-form-basic-info.component';
import { CourseFormTableOfContentComponent } from './components/course-form/course-form-table-of-content/course-form-table-of-content.component';
import { CourseFormPublishingInfoComponent } from './components/course-form/course-form-publishing-info/course-form-publishing-info.component';
import { CourseFormConfirmComponent } from './components/course-form/course-form-confirm/course-form-confirm.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseFormComponent,
    CoursesListComponent,
    CourseDetailsComponent,
    CourseFormBasicInfoComponent,
    CourseFormTableOfContentComponent,
    CourseFormPublishingInfoComponent,
    CourseFormConfirmComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
  ]
})
export class CoursesModule { }
