import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ProjectModel} from '../model/project.model';
import {ProgramModel} from '../model/program.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  constructor() {
  }

  public getProjectsByProgramId(id: number): Observable<ProjectModel[]> {
    const projects: ProjectModel[] = [];

    projects.push(
      new ProjectModel(1,
        'սահմանափակ հնարավորություններով 0-6 տարեկան երեխաների տվյալների հավաքագրում ըստ մարզերի',
      )
    );

    return of(projects);
  }

  public getPrograms(): Observable<ProgramModel[]> {
    const programs: ProgramModel[] = [];
    programs.push(new ProgramModel(1, 'ՀՀ – ում սահմանափակ հնարավորություններով 0-18 տարեկան երեխաների կյանքի որակի բարձրացում'));
    return of(programs);
  }
}
