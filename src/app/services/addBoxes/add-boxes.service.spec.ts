import { TestBed } from '@angular/core/testing';

import { AddBoxesService } from './add-boxes.service';

describe('AddBoxesService', () => {
  let service: AddBoxesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddBoxesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
