import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  isLinear = false;

  constructor(
  ) {}

  ngOnInit() {

  }

  onCourseCreated(newCourse: boolean) {
    if (newCourse) {
      // TODO: get current course
    }
  }

}
