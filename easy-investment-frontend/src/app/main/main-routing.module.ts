import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {UserPageComponent} from './component/user-page/user-page.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview',
      },
      {
        path: 'overview',
        loadChildren: () => import('../overview/overview.module').then(m => m.OverviewModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('../forms/forms.module').then(m => m.AppFormsModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('../categories/categories.module').then(m => m.CategoriesModule)
      },
      {
        path: 'reports',
        loadChildren: () => import('../reports/reports.module').then(m => m.ReportsModule)
      },
      {
        path: 'user',
        component: UserPageComponent
      },
      {
        path: 'frameworks',
        loadChildren: () => import('../framework/framework.module').then(m => m.FrameworkModule)
      },
      {
        path: 'programs',
        loadChildren: () => import('../programs/programs.module').then(m => m.ProgramsModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
