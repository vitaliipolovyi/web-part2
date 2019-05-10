import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationTypeListComponent } from './location-type-list.component';

describe('LocationTypeListComponent', () => {
  let component: LocationTypeListComponent;
  let fixture: ComponentFixture<LocationTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
