import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-form-basic-info',
  templateUrl: './course-form-basic-info.component.html',
  styleUrls: ['./course-form-basic-info.component.scss']
})
export class CourseFormBasicInfoComponent implements OnInit {
  basicInfoForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.basicInfoForm = this.fb.group({
      title: ['', Validators.required]
    });
  }

}
