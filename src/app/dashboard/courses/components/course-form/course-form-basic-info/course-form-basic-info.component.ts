import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesStoreService } from 'src/app/dashboard/services/store/courses-store.service';
import { CurrentCourseStoreService } from 'src/app/dashboard/services/store/current-course-store.service';

@Component({
  selector: 'app-course-form-basic-info',
  templateUrl: './course-form-basic-info.component.html',
  styleUrls: ['./course-form-basic-info.component.scss']
})
export class CourseFormBasicInfoComponent implements OnInit {
  @Output() courseCreated = new EventEmitter<boolean>();
  basicInfoForm: FormGroup;

  constructor(private fb: FormBuilder,
              private coursesStoreService: CoursesStoreService,
              private currentCourseStoreService: CurrentCourseStoreService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.basicInfoForm = this.fb.group({
      title: ['', Validators.required],
      desc: ['']
    });
  }

  createCourse() {
    const {title, desc} = this.basicInfoForm.value;
    const course = {title, desc};
    const courseCreated = this.coursesStoreService.addCourse(course);
    this.currentCourseStoreService.addOrUpdate(courseCreated);
    this.courseCreated.emit(true);
  }

}
