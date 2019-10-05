import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form-table-of-content',
  templateUrl: './course-form-table-of-content.component.html',
  styleUrls: ['./course-form-table-of-content.component.scss']
})
export class CourseFormTableOfContentComponent implements OnInit {
  @Input() stepper: any;

  panelOpenState = false;

  constructor() { }

  ngOnInit() {
  }

}
