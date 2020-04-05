import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {CategoryModel} from '../shared/category.model';
import {CategoryValueModel} from '../shared/category.value.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() {
  }

  public getAllCategories(): Observable<CategoryModel[]> {
    const categories: CategoryModel[] = [];

    categories.push(
      new CategoryModel(1,
        'Organisation',
        [
          new CategoryValueModel(1, 'EasyInvestment'),
          new CategoryValueModel(2, 'NUACA'),
          new CategoryValueModel(3, 'UNICEF'),
          new CategoryValueModel(4, 'Cisco')
        ])
    );

    categories.push(
      new CategoryModel(2,
        'Currency',
        [
          new CategoryValueModel(1, 'AMD'),
          new CategoryValueModel(2, 'USA'),
          new CategoryValueModel(3, 'EUR'),
          new CategoryValueModel(4, 'RUB')
        ])
    );

    return of(categories);
  }

  public addCategory(category: CategoryModel) {

  }

  public deleteCategory(id: number) {

  }

  public updateCategory(category: CategoryModel) {

  }

  public getCategory(id: number) {

  }
}
