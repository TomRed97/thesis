import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {ProgramModel} from '../../model/program.model';
import {ProgramsService} from '../../service/programs.service';

@Component({
  selector: 'app-programs-table',
  templateUrl: './programs-table.component.html',
  styleUrls: ['./programs-table.component.css']
})
export class ProgramsTableComponent implements OnInit {

  public displayedColumns: string[];

  public dataSource: MatTableDataSource<ProgramModel>;

  public programs: ProgramModel[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private programService: ProgramsService, public dialog: MatDialog) {
    this.displayedColumns = ['name'];
  }

  ngOnInit(): void {
    this.programService.getPrograms().subscribe((programsData) => {
      this.programs = programsData;
      this.dataSource = new MatTableDataSource<ProgramModel>(this.programs);
      this.dataSource.paginator = this.paginator;
    });
  }

}
