import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsComponent} from './forms.component';


const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'overview',
      // },
      // {
      //   path: 'overview',
      //   loadChildren: () => import('../overview/overview.module').then(m => m.OverviewModule)
      // },
      // {
      //   path: 'forms',
      //   loadChildren: () => import('../forms/forms.module').then(m => m.FormsModule)
      // }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {
}
