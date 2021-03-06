import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesStoreService } from 'src/app/dashboard/services/store/courses-store.service';
import { CourseModel } from 'src/app/dashboard/shared/models/course.model';

@Component({
  selector: 'app-course-form-publishing-info',
  templateUrl: './course-form-publishing-info.component.html',
  styleUrls: ['./course-form-publishing-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseFormPublishingInfoComponent implements OnInit {
  @Input() currentCourse: CourseModel;

  publishingInfo: FormGroup;

  constructor(private fb: FormBuilder,
              private coursesStoreService: CoursesStoreService,) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.publishingInfo = this.fb.group({
      publishDate: ['', Validators.required],
      isPublished: [ false, Validators.required]
    });
  }

  publicationDate({value: publicationDate}) {
    this.coursesStoreService.updateCourse({...this.currentCourse, publicationDate});
  }

  publishCourse({checked: isPublished}) {
    this.coursesStoreService.updateCourse({...this.currentCourse, isPublished});
  }

}
