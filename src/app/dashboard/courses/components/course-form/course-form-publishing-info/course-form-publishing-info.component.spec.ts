import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFormPublishingInfoComponent } from './course-form-publishing-info.component';

describe('CourseFormPublishingInfoComponent', () => {
  let component: CourseFormPublishingInfoComponent;
  let fixture: ComponentFixture<CourseFormPublishingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseFormPublishingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFormPublishingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
