import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReparationComponent } from './modal-reparation.component';

describe('ModalReparationComponent', () => {
  let component: ModalReparationComponent;
  let fixture: ComponentFixture<ModalReparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalReparationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
