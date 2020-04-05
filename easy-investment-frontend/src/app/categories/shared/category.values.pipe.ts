import {Pipe, PipeTransform} from '@angular/core';
import {CategoryValueModel} from './category.value.model';

@Pipe({
  name: 'categoryValues',
  pure: true
})
export class CategoryValuesPipe implements PipeTransform {

  transform(values: CategoryValueModel[]): string {
    return values.map(value => value.name).join(', ');
  }
}
