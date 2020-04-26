import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-overview',
  templateUrl: './progress-overview.component.html',
  styleUrls: ['./progress-overview.component.css']
})
export class ProgressOverviewComponent implements OnInit {

  @Input()
  public done: number;

  @Input()
  public inProgress: number;

  @Input()
  public notDone: number;

  constructor() { }

  ngOnInit(): void {
  }

}
