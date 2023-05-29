import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnReparationComponent } from './btn-reparation.component';

describe('BtnReparationComponent', () => {
  let component: BtnReparationComponent;
  let fixture: ComponentFixture<BtnReparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnReparationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
