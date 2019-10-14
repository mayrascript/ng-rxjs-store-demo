import { TestBed } from '@angular/core/testing';

import { CurrentCourseStoreService } from 'src/app/dashboard/services/store/current-course-store.service';

describe('CurrentCourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentCourseStoreService = TestBed.get(CurrentCourseStoreService);
    expect(service).toBeTruthy();
  });
});
