import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarasoulComponent } from './carasoul.component';

describe('CarasoulComponent', () => {
  let component: CarasoulComponent;
  let fixture: ComponentFixture<CarasoulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarasoulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarasoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
