import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketMagasinListComponent } from './ticket-magasin-list.component';

describe('TicketMagasinListComponent', () => {
  let component: TicketMagasinListComponent;
  let fixture: ComponentFixture<TicketMagasinListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketMagasinListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketMagasinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
