import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFormConfirmComponent } from './course-form-confirm.component';

describe('CourseFormConfirmComponent', () => {
  let component: CourseFormConfirmComponent;
  let fixture: ComponentFixture<CourseFormConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseFormConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFormConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
