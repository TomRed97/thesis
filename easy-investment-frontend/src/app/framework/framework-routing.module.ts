import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrameworkOverviewComponent} from './component/framework-overview/framework-overview.component';


const routes: Routes = [
  {
    path: '',
    component: FrameworkOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrameworkRoutingModule { }
