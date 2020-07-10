import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateComponent } from './private.component';
import {AppComponent} from '../app.component';
import {SharedModule} from '../shared/shared.module';
import {AppModule} from '../app.module';

describe('PrivateComponent', () => {
  let component: PrivateComponent;
  let fixture: ComponentFixture<PrivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateComponent ],
      imports: [
        AppModule,
        SharedModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
