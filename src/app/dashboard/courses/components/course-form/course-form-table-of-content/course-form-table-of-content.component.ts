import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesStoreService } from 'src/app/dashboard/services/store/courses-store.service';
import { CurrentCourseStoreService } from 'src/app/dashboard/services/store/current-course-store.service';
import { CourseModel } from 'src/app/dashboard/shared/models/course.model';
import { ModuleModel } from 'src/app/dashboard/shared/models/module.model';
import { ThemeModel } from 'src/app/dashboard/shared/models/theme.model';

@Component({
  selector: 'app-course-form-table-of-content',
  templateUrl: './course-form-table-of-content.component.html',
  styleUrls: ['./course-form-table-of-content.component.scss']
})
export class CourseFormTableOfContentComponent implements OnInit {
  @Input() stepper: any;
  @Input() currentCourse: CourseModel;

  moduleForm: FormGroup;
  panelOpenState = false;
  modules: ModuleModel[] = [];

  constructor(private fb: FormBuilder,
              private courseStoreService: CoursesStoreService,
              private currentCourseService: CurrentCourseStoreService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.moduleForm = this.fb.group({
      title: ['', Validators.required],
      desc: [''],
      themes: this.fb.group({
        title: ['', Validators.required],
        desc: [''],
        teacherNotes: ['']
      })
    });
  }

  addThemeToModule() {
    const module = this.getModuleInfo();
    const {title, desc, teacherNotes} = this.moduleForm.controls.themes.value;
    this.addModule(module, {title, desc, teacherNotes});
    this.resetThemeForm();
  }

  private addModule(module: ModuleModel, theme: ThemeModel) {
    const filtered = this.modules.filter((m) => m.title === module.title);
    if (filtered.length > 0) {
      const album = filtered[0];
      album.themes.push(theme);
    } else {
      module.themes = [theme];
      this.modules.push(module);
    }

    this.updateCourse();
  }

  private getModuleInfo(): ModuleModel {
    const {title, desc} = this.moduleForm.value;
    return {title, desc, themes: []};
  }

  private resetThemeForm() {
    this.moduleForm.controls.themes.reset();
  }

  private updateCourse() {
    const currentCourse = {...this.currentCourse, modules: this.modules};
    this.courseStoreService.updateCourse(currentCourse);
    this.currentCourseService.addOrUpdate(currentCourse);
  }

}
