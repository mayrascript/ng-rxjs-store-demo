import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursesStoreService } from 'src/app/dashboard/services/store/courses-store.service';
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
    private coursesStoreService: CoursesStoreService
  ) {}

  ngOnInit() {
    this.currentCourse$ = this.coursesStoreService.getCurrentCourse();
  }

}
