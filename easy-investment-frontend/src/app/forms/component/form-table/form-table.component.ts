import {Component, OnInit, ViewChild} from '@angular/core';
import {FormType} from '../../shared/enum/form.type';
import {FormService} from '../../service/form.service';
import {FormModel} from '../../shared/model/form.model';
import {formTypeMessages} from '../../../shared/data/general-data';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.css']
})
export class FormTableComponent implements OnInit {

  public formType = FormType;

  public displayedColumns: string[];

  public dataSource: MatTableDataSource<FormModel>;

  // tslint:disable-next-line:variable-name
  private _selectedFormType = null;

  public get selectedFormType(): number {
    return this._selectedFormType;
  }

  public set selectedFormType(value: number) {
    this._selectedFormType = value;
    this.applyFilter();
  }

  public formTypeMessages: Map<FormType, string>;

  public formsData: FormModel[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private formService: FormService) {
    this.displayedColumns = ['name', 'formType', 'details', 'createdDate', 'creatorId'];
    this.formTypeMessages = formTypeMessages;
  }

  ngOnInit(): void {
    this.formService.getAllForms().subscribe((forms) => {
      this.formsData = forms;
      this.dataSource = new MatTableDataSource<FormModel>(this.formsData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = (data, filter) => {
        return data.formType === +filter;
      };
    });
  }

  applyFilter() {
    this.dataSource.filter = this.selectedFormType ? this.selectedFormType.toString() : '';
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
