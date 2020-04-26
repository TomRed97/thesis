import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FieldType} from '../../shared/enum/field.type';
import {CategoryFieldOptionType} from '../../shared/enum/category-field-option.type';

@Component({
  selector: 'app-field-dialog',
  templateUrl: './field-dialog.component.html',
  styleUrls: ['./field-dialog.component.css']
})
export class FieldDialogComponent implements OnInit {

  public fieldType = FieldType;

  public categoryOptionType = CategoryFieldOptionType;

  public fieldName: string;

  public selectedFieldType: number;

  public selectedCategoryType: number;

  public selectedCategoryOptionType: number;

  constructor(public dialogRef: MatDialogRef<FieldDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

}
