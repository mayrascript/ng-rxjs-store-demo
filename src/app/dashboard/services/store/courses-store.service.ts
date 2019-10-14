import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CourseModel } from 'src/app/dashboard/shared/models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {

  private readonly _courses = new BehaviorSubject<CourseModel[]>([]);

  readonly courses$ = this._courses.asObservable();

  addCourse(course: CourseModel) {
    // with automatically assigned ID ( don't do this at home, use uuid() )
    const courseWithId = {...course, id: this.courses.length + 1, isPublished: false};
    this.courses = [
      ...this.courses,
      courseWithId
    ];
    return courseWithId;
  }

  updateCourse(courseUpdated: CourseModel) {
    const filtered = this.courses.filter((c) => c.id !== courseUpdated.id);
    if (filtered.length !== this.courses.length) {
      this.courses = [
        ...filtered,
        courseUpdated
      ];
    }

    console.log(this.courses);
  }

  removeCourse(id: number) {
    this.courses = this.courses.filter(course => course.id !== id);
  }

  private get courses(): CourseModel[] {
    return this._courses.getValue();
  }

  private set courses(val: CourseModel[]) {
    this._courses.next(val);
  }
}
