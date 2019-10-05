import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-form-publishing-info',
  templateUrl: './course-form-publishing-info.component.html',
  styleUrls: ['./course-form-publishing-info.component.scss']
})
export class CourseFormPublishingInfoComponent implements OnInit {
  publishingInfo: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.publishingInfo = this.fb.group({
      publishDate: ['', Validators.required],
      isPublished: [ false, Validators.required]
    });
  }

}
