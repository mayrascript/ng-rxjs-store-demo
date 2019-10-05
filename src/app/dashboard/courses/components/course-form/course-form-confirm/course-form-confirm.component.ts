import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form-confirm',
  templateUrl: './course-form-confirm.component.html',
  styleUrls: ['./course-form-confirm.component.scss']
})
export class CourseFormConfirmComponent implements OnInit {
  @Input() stepper: any;

  constructor() { }

  ngOnInit() {
  }

}
