import { TestBed, inject } from '@angular/core/testing';

import { PutdataService } from './putdata.service';

describe('PutdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PutdataService]
    });
  });

  it('should be created', inject([PutdataService], (service: PutdataService) => {
    expect(service).toBeTruthy();
  }));
});
