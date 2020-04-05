import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsRoutingModule} from './forms-routing.module';
import {FormsComponent} from './forms.component';
import {FormTableComponent} from './component/form-table/form-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [FormsComponent, FormTableComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatPaginatorModule,
    SharedModule
  ]
})
export class FormsModule {
}
