import { Component, OnInit } from '@angular/core';
import {FrameworkService} from '../../service/framework.service';

@Component({
  selector: 'app-framework-overview',
  templateUrl: './framework-overview.component.html',
  styleUrls: ['./framework-overview.component.css'],
  providers: [FrameworkService]
})
export class FrameworkOverviewComponent implements OnInit {

  constructor(private frameworkService: FrameworkService) { }

  ngOnInit(): void {
    this.frameworkService.consoleLog();
  }

}
