import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrameworkRoutingModule } from './framework-routing.module';
import { FrameworkOverviewComponent } from './component/framework-overview/framework-overview.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [FrameworkOverviewComponent],
  imports: [
    CommonModule,
    FrameworkRoutingModule,
    MatCardModule
  ]
})
export class FrameworkModule { }
