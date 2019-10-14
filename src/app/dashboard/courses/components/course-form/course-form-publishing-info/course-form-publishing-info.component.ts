import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesStoreService } from 'src/app/dashboard/services/store/courses-store.service';
import { CurrentCourseStoreService } from 'src/app/dashboard/services/store/current-course-store.service';
import { CourseModel } from 'src/app/dashboard/shared/models/course.model';

@Component({
  selector: 'app-course-form-publishing-info',
  templateUrl: './course-form-publishing-info.component.html',
  styleUrls: ['./course-form-publishing-info.component.scss']
})
export class CourseFormPublishingInfoComponent implements OnInit {
  @Input() currentCourse: CourseModel;

  publishingInfo: FormGroup;

  constructor(private fb: FormBuilder,
              private coursesStoreService: CoursesStoreService,
              private currentCourseStoreService: CurrentCourseStoreService) { }

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
    const currentCourse = {...this.currentCourse, publicationDate};
    this.coursesStoreService.updateCourse(currentCourse);
    this.currentCourseStoreService.addOrUpdate(currentCourse);
  }

  publishCourse({checked: isPublished}) {
    const currentCourse = {...this.currentCourse, isPublished};
    this.coursesStoreService.updateCourse(currentCourse);
    this.currentCourseStoreService.addOrUpdate(currentCourse);
  }

}
