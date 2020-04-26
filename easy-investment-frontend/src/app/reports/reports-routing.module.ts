import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReportTableComponent} from './component/report-table/report-table.component';
import {ReportComponent} from './component/report/report.component';


const routes: Routes = [
  // path: '',
  // component: FormsComponent,
  // children: [
    {
      path: '',
      redirectTo: 'report-table',
    },
    {
      path: 'report-table',
      component: ReportTableComponent
    },
    {
      path: 'report/:id',
      component: ReportComponent
    },
  // ]
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule {
}
