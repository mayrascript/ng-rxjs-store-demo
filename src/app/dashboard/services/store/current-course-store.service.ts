import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CourseModel } from 'src/app/dashboard/shared/models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CurrentCourseStoreService {

  private readonly _currentCourse = new BehaviorSubject<CourseModel>({});

  readonly currentCourse$ = this._currentCourse.asObservable();

  constructor() { }

  addOrUpdate(course: CourseModel): void {
    this.currentCourse = {...course};
  }

  remove(): void {
    this.currentCourse = {};
  }

  private get currentCourse(): CourseModel {
    return this._currentCourse.getValue();
  }

  private set currentCourse(val: CourseModel) {
    try {
      this._currentCourse.next(val);
    } catch (e) {
      console.log(e);
    }
  }
}
