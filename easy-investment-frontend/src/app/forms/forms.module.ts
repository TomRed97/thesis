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
import {NewFormDialogComponent} from './component/new-form-dialog/new-form-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {CategoryFormComponent} from './component/category-form/category-form.component';
import {MatCardModule} from '@angular/material/card';
import {FieldDialogComponent} from './component/field-dialog/field-dialog.component';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [FormsComponent, FormTableComponent, NewFormDialogComponent, CategoryFormComponent, FieldDialogComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatPaginatorModule,
    SharedModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatRadioModule
  ]
})
export class AppFormsModule {
}
