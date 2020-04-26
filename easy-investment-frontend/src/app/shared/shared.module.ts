import {NgModule} from '@angular/core';
import {UserNamePipe} from './pipe/user-name.pipe';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    UserNamePipe
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    UserNamePipe
  ],
  providers: [],
})
export class SharedModule {
}
