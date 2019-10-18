import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CourseModel } from 'src/app/dashboard/shared/models/course.model';

@Component({
  selector: 'app-course-form-confirm',
  templateUrl: './course-form-confirm.component.html',
  styleUrls: ['./course-form-confirm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseFormConfirmComponent implements OnInit {
  @Input() stepper: any;
  @Input() currentCourse: CourseModel;

  constructor() { }

  ngOnInit() {
  }

}
