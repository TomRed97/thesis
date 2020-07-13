import {Injectable, OnDestroy} from '@angular/core';

@Injectable()
export class FrameworkService implements OnDestroy {

  constructor() {
    console.log('init');

  }

  ngOnDestroy(): void {
    console.log('destroy');
  }

  public consoleLog() {
    console.log('service')
  }
}
