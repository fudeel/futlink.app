import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AreaCardBtnComponent} from './area-card-btn.component';

describe('AreaCardBtnComponent', () => {
  let component: AreaCardBtnComponent;
  let fixture: ComponentFixture<AreaCardBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AreaCardBtnComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaCardBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
