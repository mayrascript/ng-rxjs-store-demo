import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface ModuleModel {
  title: string;
  desc?: string;
  number?: number;
  themes?: ThemeModel[];
}

interface ThemeModel {
  number?: number;
  title: string;
  desc: string;
}
@Component({
  selector: 'app-course-form-table-of-content',
  templateUrl: './course-form-table-of-content.component.html',
  styleUrls: ['./course-form-table-of-content.component.scss']
})
export class CourseFormTableOfContentComponent implements OnInit {
  @Input() stepper: any;

  moduleForm: FormGroup;
  panelOpenState = false;
  modules: ModuleModel[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.moduleForm = this.fb.group({
      title: ['', Validators.required],
      desc: [''],
      themes: this.fb.group({
        title: [''],
        desc: [''],
      })
    });
  }

  addThemeToModule() {
    const module = this.getModuleInfo();
    const {title, desc} = this.moduleForm.controls.themes.value;
    this.addModule(module, {title, desc});
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
  }

  private getModuleInfo(): ModuleModel {
    const {title, desc} = this.moduleForm.value;
    return {title, desc, themes: []};
  }

  private resetThemeForm() {
    this.moduleForm.controls.themes.reset();
  }

}
