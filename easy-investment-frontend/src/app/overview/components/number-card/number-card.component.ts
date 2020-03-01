import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-number-card',
  templateUrl: './number-card.component.html',
  styleUrls: ['./number-card.component.css']
})
export class NumberCardComponent implements OnInit {

  @Input()
  public id: string;

  @Input()
  public title: string;

  @Input()
  public count: number;

  constructor() { }

  ngOnInit(): void {
  }

}
