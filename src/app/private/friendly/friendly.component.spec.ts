import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FriendlyComponent} from './friendly.component';
import {AppModule} from "../../app.module";

describe('FriendlyComponent', () => {
  let component: FriendlyComponent;
  let fixture: ComponentFixture<FriendlyComponent>;

  const userToStore = {
    name: 'User',
    uid: 'ABC'
  }
  localStorage.setItem('userLocalStorage', JSON.stringify(userToStore))
  const userUuid = JSON.parse(localStorage.getItem('userLocalStorage')).uid;
  let uid = 'uid-test';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FriendlyComponent],
      imports: [AppModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
