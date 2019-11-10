import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFormTableOfContentComponent } from './course-form-table-of-content.component';

describe('CourseFormTableOfContentComponent', () => {
  let component: CourseFormTableOfContentComponent;
  let fixture: ComponentFixture<CourseFormTableOfContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseFormTableOfContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFormTableOfContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
