import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OverviewRoutingModule} from './overview-routing.module';
import {OverviewComponent} from './overview.component';
import {NumberCardComponent} from './components/number-card/number-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [OverviewComponent, NumberCardComponent],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class OverviewModule { }
