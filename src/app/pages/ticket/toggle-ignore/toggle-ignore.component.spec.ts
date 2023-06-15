import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleIgnoreComponent } from './toggle-ignore.component';

describe('ToggleIgnoreComponent', () => {
  let component: ToggleIgnoreComponent;
  let fixture: ComponentFixture<ToggleIgnoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleIgnoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleIgnoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
