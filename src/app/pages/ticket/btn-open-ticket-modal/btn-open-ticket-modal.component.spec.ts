import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOpenTicketModalComponent } from './btn-open-ticket-modal.component';

describe('BtnOpenTicketModalComponent', () => {
  let component: BtnOpenTicketModalComponent;
  let fixture: ComponentFixture<BtnOpenTicketModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOpenTicketModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOpenTicketModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
