import { Component, OnInit } from '@angular/core';
import {FormType} from '../../shared/enum/form.type';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.css']
})
export class FormTableComponent implements OnInit {

  public formType = FormType;

  public displayedColumns: string[];

  public dataSource = [{name: 'kkkk', formType: 'gg', details: 'details', createdDate: 'hhh', creatorId: 5}];

  public selectedFormType = FormType.Program;

  constructor() {
    this.displayedColumns = ['name', 'formType', 'details', 'createdDate', 'creatorId'];
  }

  ngOnInit(): void {
  }

}
