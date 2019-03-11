import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChillersComponent } from './chillers.component';

describe('ChillersComponent', () => {
  let component: ChillersComponent;
  let fixture: ComponentFixture<ChillersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChillersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChillersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
