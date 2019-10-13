import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CourseModel } from 'src/app/dashboard/shared/models/course.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  isLinear = false;
  currentCourse: CourseModel;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
  }

  onCourseCreated(newCourse: CourseModel) {
    this.currentCourse = newCourse;
  }

}
