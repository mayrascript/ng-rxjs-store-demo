import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: MenuComponent,
    children: [
      {
        path: 'courses',
        loadChildren: () => import(`./courses/courses.module`).then(m => m.CoursesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
