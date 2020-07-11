import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatePositionComponent } from './activate-position.component';

describe('ActivatePositionComponent', () => {
  let component: ActivatePositionComponent;
  let fixture: ComponentFixture<ActivatePositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivatePositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
