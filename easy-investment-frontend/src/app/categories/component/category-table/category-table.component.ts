import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {CategoryModel} from '../../shared/category.model';
import {CategoryService} from '../../service/category.service';
import {MatDialog} from '@angular/material/dialog';
import {CategoryDialogComponent} from '../dialog/category.dialog';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent implements OnInit {

  public displayedColumns: string[];

  public dataSource: MatTableDataSource<CategoryModel>;

  public categoryModels: CategoryModel[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private categoryService: CategoryService, public dialog: MatDialog) {
    this.displayedColumns = ['name', 'values', 'actions'];
  }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categoryModels = categories;
      this.dataSource = new MatTableDataSource<CategoryModel>(this.categoryModels);
      this.dataSource.paginator = this.paginator;
    });
  }

  public openNewCategoryDialog() {
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  public removeCategory(id: number) {
  }

  public editCategory(category: CategoryModel) {
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      width: '500px',
      data: {category}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
