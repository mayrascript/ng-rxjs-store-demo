import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Selector } from 'src/app/core/services/store/selector';
import { StoreService } from 'src/app/core/services/store/store.service';
import { CourseModel } from 'src/app/dashboard/shared/models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService extends StoreService {
  courses = [];

  readonly storeName = 'courses';

  constructor(selector: Selector) {
    super(selector);
  }

  addCourse(course: CourseModel) {
   try {
     // with automatically assigned ID ( don't do this at home, use uuid() )
     const courseWithId = {...course, id: this.courses.length + 1, isPublished: false};
     const courses = [
           ...this.courses,
           courseWithId
         ];
     this.add({courses});
   } catch (e) {
     console.log(e);
   }
  }

  updateCourse(courseUpdated: CourseModel) {
    const filtered = this.courses.filter((c) => c.id !== courseUpdated.id);
    if (filtered.length !== this.courses.length) {
      const courses = [
        ...filtered,
        courseUpdated
      ];
      this.update({courses});
    }
  }

  courseState() {
    return this.state();
  }
}
