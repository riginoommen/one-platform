import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModDetailsComponent } from './mod-details.component';

describe('ModDetailsComponent', () => {
  let component: ModDetailsComponent;
  let fixture: ComponentFixture<ModDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
