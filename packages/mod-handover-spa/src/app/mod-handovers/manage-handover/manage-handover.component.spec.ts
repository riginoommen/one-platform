import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHandoverComponent } from './manage-handover.component';

describe('ManageHandoverComponent', () => {
  let component: ManageHandoverComponent;
  let fixture: ComponentFixture<ManageHandoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageHandoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageHandoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
