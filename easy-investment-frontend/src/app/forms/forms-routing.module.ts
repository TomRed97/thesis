import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsComponent} from './forms.component';
import {FormTableComponent} from './component/form-table/form-table.component';
import {CategoryFormComponent} from './component/category-form/category-form.component';


const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: '',
        redirectTo: 'form-table',
      },
      {
        path: 'form-table',
        component: FormTableComponent
      },
      {
        path: 'form/:id',
        component: CategoryFormComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {
}
