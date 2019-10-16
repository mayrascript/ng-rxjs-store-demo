import { Injectable } from '@angular/core';
import { CourseModel } from 'src/app/dashboard/shared/models/course.model';
import { StoreService } from 'src/app/core/services/store/store.service';
import { actions } from 'src/app/core/services/store/actions';
import { select } from 'src/app/core/services/store/operators';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/services/store/app-state';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {

  static count = 0;

  constructor(private storeService: StoreService<AppState>) {
  }

  getCourses(): Observable<CourseModel[]> {
    return this.storeService.pipe(
      select('courses'),
      tap(console.log)
    );
  }

  addCourse(course: CourseModel) {
    CoursesStoreService.count += 1;
    course = {...course, id: CoursesStoreService.count, isPublished: false};
    this.storeService.dispatch({type: actions.add, payload: {course}});
  }

  updateCourse(course: CourseModel) {
    this.storeService.dispatch({type: actions.update, payload: {course}});
  }

  remove(courseId: string) {
    this.storeService.dispatch({type: actions.remove, payload: {courseId}});
  }
}
