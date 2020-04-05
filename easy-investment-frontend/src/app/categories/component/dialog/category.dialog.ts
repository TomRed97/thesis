import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CategoryModel} from '../../shared/category.model';
import {CategoryValueModel} from '../../shared/category.value.model';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category.dialog.html',
  styleUrls: ['./category.dialog.css']
})
export class CategoryDialogComponent {

  public category: CategoryModel;

  public newValue: string;

  constructor(
    public dialogRef: MatDialogRef<CategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.category = data.category || new CategoryModel(null, '', []);
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

  public addValue(): void {
    if (this.newValue) {
      const newValues = this.category.values.slice();
      newValues.push(new CategoryValueModel(null, this.newValue));
      this.category.values = newValues;
      this.newValue = null;
    }
  }
}
