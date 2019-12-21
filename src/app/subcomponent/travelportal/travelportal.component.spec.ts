import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelportalComponent } from './travelportal.component';

describe('TravelportalComponent', () => {
  let component: TravelportalComponent;
  let fixture: ComponentFixture<TravelportalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelportalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
