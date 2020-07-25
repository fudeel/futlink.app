import {TestBed} from '@angular/core/testing';

import {MiscService} from './misc.service';
import {HttpClientModule} from "@angular/common/http";
import {AppModule} from "../../app.module";
import {SharedModule} from "../shared.module";

describe('MiscService', () => {
  let service: MiscService;
  let httpClient: HttpClientModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        SharedModule,
      ]
    }).compileComponents();
    service = TestBed.inject(MiscService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
