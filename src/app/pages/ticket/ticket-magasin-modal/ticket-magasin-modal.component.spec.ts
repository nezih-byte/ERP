import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketMagasinModalComponent } from './ticket-magasin-modal.component';

describe('TicketMagasinModalComponent', () => {
  let component: TicketMagasinModalComponent;
  let fixture: ComponentFixture<TicketMagasinModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketMagasinModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketMagasinModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
