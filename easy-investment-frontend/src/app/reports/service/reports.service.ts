import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ReportModel} from '../model/report.model';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor() {
  }

  public getReportById(id: number): Observable<ReportModel> {
    const report: ReportModel = new ReportModel(1,
      'Projects Count Per Program',
    );

    return of(report);
  }

  public getReports(): Observable<ReportModel[]> {
    const reports: ReportModel[] = [];
    reports.push(new ReportModel(1, 'Projects Count Per Program'));
    return of(reports);
  }
}
