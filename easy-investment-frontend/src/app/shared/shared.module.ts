import {NgModule} from '@angular/core';
import {UserNamePipe} from './pipe/user-name.pipe';

@NgModule({
  declarations: [
    UserNamePipe
  ],
  imports: [
  ],
  exports: [
    UserNamePipe
  ],
  providers: [],
})
export class SharedModule {
}
