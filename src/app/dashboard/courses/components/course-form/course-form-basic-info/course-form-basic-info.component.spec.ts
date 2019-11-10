import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFormBasicInfoComponent } from './course-form-basic-info.component';

describe('CourseFormBasicInfoComponent', () => {
  let component: CourseFormBasicInfoComponent;
  let fixture: ComponentFixture<CourseFormBasicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseFormBasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFormBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
