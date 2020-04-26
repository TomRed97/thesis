import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProgramsRoutingModule} from './programs-routing.module';
import {ProgramsTableComponent} from './component/programs-table/programs-table.component';
import {ProgramComponent} from './component/program/program.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [ProgramsTableComponent, ProgramComponent],
  imports: [
    CommonModule,
    ProgramsRoutingModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class ProgramsModule { }
