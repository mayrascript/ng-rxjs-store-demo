import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { CurrentCourseStoreService } from 'src/app/dashboard/services/store/current-course-store.service';
import { CourseModel } from 'src/app/dashboard/shared/models/course.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  isLinear = false;
  currentCourse$: Observable<CourseModel>;

  constructor(
    private currentCourseService: CurrentCourseStoreService
  ) {}

  ngOnInit() {
  }

  onCourseCreated(newCourse: boolean) {
    if (newCourse) {
      this.currentCourse$ = this.currentCourseService.currentCourse$;
    }
  }

}
