import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnFinalComponent } from './btn-final.component';

describe('BtnFinalComponent', () => {
  let component: BtnFinalComponent;
  let fixture: ComponentFixture<BtnFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
