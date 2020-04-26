import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FieldDialogComponent} from '../field-dialog/field-dialog.component';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openFieldDialog() {
    const dialogRef = this.dialog.open(FieldDialogComponent, {
      width: '350',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
