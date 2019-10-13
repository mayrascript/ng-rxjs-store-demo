import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseStoreService } from 'src/app/dashboard/services/store/course-store.service';
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
              private courseStoreService: CourseStoreService) { }

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
    this.currentCourse = {...this.currentCourse, publicationDate};
    this.courseStoreService.updateCourse(this.currentCourse);
  }

  publishCourse({checked: isPublished}) {
    this.currentCourse = {...this.currentCourse, isPublished};
    this.courseStoreService.updateCourse(this.currentCourse);
  }

}
