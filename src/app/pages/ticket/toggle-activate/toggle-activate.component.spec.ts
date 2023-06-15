import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleActivateComponent } from './toggle-activate.component';

describe('ToggleActivateComponent', () => {
  let component: ToggleActivateComponent;
  let fixture: ComponentFixture<ToggleActivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleActivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleActivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
