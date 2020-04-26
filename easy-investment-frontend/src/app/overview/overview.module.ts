import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OverviewRoutingModule} from './overview-routing.module';
import {OverviewComponent} from './overview.component';
import {NumberCardComponent} from './components/number-card/number-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {ProgressOverviewComponent} from './components/progress-overview/progress-overview.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [OverviewComponent, NumberCardComponent, ProgressOverviewComponent],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule
  ]
})
export class OverviewModule {
}
