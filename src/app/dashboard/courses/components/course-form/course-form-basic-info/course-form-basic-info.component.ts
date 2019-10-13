import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseStoreService } from 'src/app/dashboard/services/store/course-store.service';
import { CourseModel } from 'src/app/dashboard/shared/models/course.model';

@Component({
  selector: 'app-course-form-basic-info',
  templateUrl: './course-form-basic-info.component.html',
  styleUrls: ['./course-form-basic-info.component.scss']
})
export class CourseFormBasicInfoComponent implements OnInit {
  basicInfoForm: FormGroup;

  constructor(private fb: FormBuilder,
              private courseStoreService: CourseStoreService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.basicInfoForm = this.fb.group({
      title: ['', Validators.required],
      desc: ['']
    });
  }

  createCourse() {
    const {title, desc} = this.basicInfoForm.value;
    const course = {title, desc};
    const courseCreated = this.courseStoreService.addCourse(course);
    // TODO: update views.
  }

}
