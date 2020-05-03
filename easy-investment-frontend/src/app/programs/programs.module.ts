import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProgramsRoutingModule} from './programs-routing.module';
import {ProgramsTableComponent} from './component/programs-table/programs-table.component';
import {ProgramComponent} from './component/program/program.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [ProgramsTableComponent, ProgramComponent],
  imports: [
    CommonModule,
    ProgramsRoutingModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatProgressBarModule
  ]
})
export class ProgramsModule {
}
