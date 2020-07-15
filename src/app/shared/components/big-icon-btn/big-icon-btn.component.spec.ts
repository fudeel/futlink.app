import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigIconBtnComponent } from './big-icon-btn.component';

describe('BigIconBtnComponent', () => {
  let component: BigIconBtnComponent;
  let fixture: ComponentFixture<BigIconBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigIconBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigIconBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
