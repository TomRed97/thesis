import {CategoryValueModel} from './category.value.model';

export class CategoryModel {
  constructor(public id: number, public name: string, public values: CategoryValueModel[]) {
  }
}
