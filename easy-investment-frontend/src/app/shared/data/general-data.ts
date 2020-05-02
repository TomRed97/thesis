import {FormType} from '../../forms/shared/enum/form.type';

export const formTypeMessages =
  new Map()
    .set(FormType.Program, 'Program')
    .set(FormType.Project, 'Project')
    .set(FormType.Indicator, 'Indicator')
    .set(FormType.Activity, 'Activity');

export const fieldTypeComponentsMap = new Map();

export const BASE_HTTP_URL = 'http://localhost:3001/';
