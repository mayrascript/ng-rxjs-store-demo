import { TestBed } from '@angular/core/testing';

import { CoursesStoreService } from 'src/app/dashboard/services/store/courses-store.service';

describe('CourseStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoursesStoreService = TestBed.get(CoursesStoreService);
    expect(service).toBeTruthy();
  });
});
