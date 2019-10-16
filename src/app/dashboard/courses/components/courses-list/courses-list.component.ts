import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseModel } from 'src/app/dashboard/shared/models/course.model';
import { CoursesStoreService } from 'src/app/dashboard/services/store/courses-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses$: Observable<CourseModel[]>;

  constructor(
    private router: Router,
    private coursesStoreService: CoursesStoreService
) { }

  ngOnInit() {
    this.courses$ = this.coursesStoreService.getCourses();
  }

  showDetails(id: number) {
    this.router.navigate(['courses/course-details', id]);
  }

}
