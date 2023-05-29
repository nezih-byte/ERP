import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOpenModalMagasinComponent } from './btn-open-modal-magasin.component';

describe('BtnOpenModalMagasinComponent', () => {
  let component: BtnOpenModalMagasinComponent;
  let fixture: ComponentFixture<BtnOpenModalMagasinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOpenModalMagasinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOpenModalMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
