import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ProjectModel} from '../model/project.model';

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
        'Project 1',
        )
    );
    projects.push(
      new ProjectModel(2,
        'Project 2',
        )
    );
    projects.push(
      new ProjectModel(3,
        'Project 3',
        )
    );


    return of(projects);
  }
}
