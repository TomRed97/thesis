import {FormType} from '../../forms/shared/enum/form.type';

export const formTypeMessages =
  new Map()
    .set(FormType.Program, 'Program')
    .set(FormType.Project, 'Project')
    .set(FormType.Indicator, 'Indicator')
    .set(FormType.Activity, 'Activity');
