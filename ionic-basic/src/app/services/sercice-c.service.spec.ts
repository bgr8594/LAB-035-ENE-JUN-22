import { TestBed } from '@angular/core/testing';

import { SerciceCService } from './sercice-c.service';

describe('GastosService', () => {
  let service: SerciceCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerciceCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
