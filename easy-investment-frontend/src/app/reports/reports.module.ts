import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReportsRoutingModule} from './reports-routing.module';
import {ReportTableComponent} from './component/report-table/report-table.component';
import {ReportComponent} from './component/report/report.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [ReportTableComponent, ReportComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
  ]
})
export class ReportsModule { }
