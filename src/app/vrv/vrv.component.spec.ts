import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrvComponent } from './vrv.component';

describe('VrvComponent', () => {
  let component: VrvComponent;
  let fixture: ComponentFixture<VrvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
