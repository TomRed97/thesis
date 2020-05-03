import {Component, OnInit, ViewChild} from '@angular/core';
import {ProgramsService} from '../../service/programs.service';
import {MatTableDataSource} from '@angular/material/table';
import {ProjectModel} from '../../model/project.model';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  public displayedColumns: string[];
  public displayedColumnsIndicators: string[];

  public dataSource: MatTableDataSource<ProjectModel>;
  public dataSourceIndicators: MatTableDataSource<{ name: string }>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private programsService: ProgramsService) {
    this.displayedColumns = ['name'];
    this.displayedColumnsIndicators = ['name'];
  }

  ngOnInit(): void {
    this.programsService.getProjectsByProgramId(1).subscribe((projects) => {
      // this.categoryModels = categories;
      this.dataSource = new MatTableDataSource<ProjectModel>(projects);
      this.dataSource.paginator = this.paginator;
      this.dataSourceIndicators =
        new MatTableDataSource<{ name: string }>([{name: '1 շաբաթում հավաքագրված կամավորների քանակը, տվյալները '}]);
    });
  }

}
