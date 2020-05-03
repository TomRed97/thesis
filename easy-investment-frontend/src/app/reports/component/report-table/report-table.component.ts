import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {ReportsService} from '../../service/reports.service';
import {ReportModel} from '../../model/report.model';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.css']
})
export class ReportTableComponent implements OnInit {

  public displayedColumns: string[];
  public displayedColumnsIndicators: string[];

  public dataSource: MatTableDataSource<ReportModel>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private reportsService: ReportsService) {
    this.displayedColumns = ['name'];
    this.displayedColumnsIndicators = ['name'];
  }

  ngOnInit(): void {
    this.reportsService.getReports().subscribe((reports) => {
      this.dataSource = new MatTableDataSource<ReportModel>(reports);
      this.dataSource.paginator = this.paginator;

    });
  }
}
