import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  courseId$: Observable<number>;
  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.courseId$ = this.route.paramMap.pipe(
      map(data => data['params'].id)
    );
  }

}
