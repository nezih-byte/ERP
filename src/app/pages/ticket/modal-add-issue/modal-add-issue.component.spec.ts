import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddIssueComponent } from './modal-add-issue.component';

describe('ModalAddIssueComponent', () => {
  let component: ModalAddIssueComponent;
  let fixture: ComponentFixture<ModalAddIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
