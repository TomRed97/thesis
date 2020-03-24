import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsRoutingModule} from './forms-routing.module';
import {FormsComponent} from './forms.component';
import {FormTableComponent} from './component/form-table/form-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [FormsComponent, FormTableComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class FormsModule {
}
