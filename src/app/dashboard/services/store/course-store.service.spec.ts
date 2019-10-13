import { TestBed } from '@angular/core/testing';

import { CourseStoreService } from './course-store.service';

describe('CourseStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseStoreService = TestBed.get(CourseStoreService);
    expect(service).toBeTruthy();
  });
});
