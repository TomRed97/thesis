import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProgramsTableComponent} from './component/programs-table/programs-table.component';
import {ProgramComponent} from './component/program/program.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'programs-table',
  },
  {
    path: 'programs-table',
    component: ProgramsTableComponent
  },
  {
    path: 'program/:id',
    component: ProgramComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule {
}
