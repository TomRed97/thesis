import {FormType} from '../enum/form.type';

export class FormModel {
  constructor(public id: string,
              public name: string,
              public formType: FormType,
              public details: string,
              public createdDate: Date,
              public creatorId: number) {
  }

}
