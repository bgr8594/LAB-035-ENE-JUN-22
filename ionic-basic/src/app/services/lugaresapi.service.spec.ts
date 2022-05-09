import { TestBed } from '@angular/core/testing';

import { LugaresapiService } from './lugaresapi.service';

describe('LugaresapiService', () => {
  let service: LugaresapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LugaresapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
