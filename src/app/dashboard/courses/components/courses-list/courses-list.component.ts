import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseModel } from 'src/app/dashboard/shared/models/course.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses: CourseModel[] = [
    {
      id: 1,
      title: 'Curso Básico de Angular',
      desc: 'de 0 a Experto',
      modules: []
    },
    {
      id: 2,
      title: 'Curso Básico de Angular Parte II',
      desc: 'Intermedio',
      modules: []
    }
  ];

  constructor(
    private router: Router
) { }

  ngOnInit() {
  }

  showDetails(id: number) {
    console.log('showDetails');
    this.router.navigate(['courses/course-details', id]);
  }

}
