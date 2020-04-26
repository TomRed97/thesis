import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkOverviewComponent } from './framework-overview.component';

describe('FrameworkOverviewComponent', () => {
  let component: FrameworkOverviewComponent;
  let fixture: ComponentFixture<FrameworkOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameworkOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
