import {Injectable} from '@angular/core';
import {FormModel} from '../shared/model/form.model';
import {Observable, of} from 'rxjs';
import {FormType} from '../shared/enum/form.type';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() {
  }

  public getAllForms(): Observable<FormModel[]> {
    const forms: FormModel[] = [];

    for (let i = 1; i < 21; i++) {
      forms.push(
        new FormModel(
          i.toString(),
          `Form ${i}`,
          i % 2 === 0 ? FormType.Program : FormType.Project,
          'details',
          new Date(),
          1
        )
      );
    }

    return of(forms);
  }
}
